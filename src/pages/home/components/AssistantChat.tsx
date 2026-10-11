import { useEffect, useRef, useState, type FormEvent } from "react";
import { API_BASE_URL } from "@/config/api";

type ChatMessage = {
  id: string;
  sender: "user" | "assistant";
  text: string;
};

type SpeechResult = { 0?: { transcript?: string }; isFinal?: boolean };
type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  onresult: ((event: { results: ArrayLike<SpeechResult> }) => void) | null;
  onerror: ((event: { error: string }) => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
};
type SpeechRecognitionConstructor = new () => SpeechRecognitionLike;
type SpeechWindow = Window & {
  SpeechRecognition?: SpeechRecognitionConstructor;
  webkitSpeechRecognition?: SpeechRecognitionConstructor;
};

const DEVICE_TOKEN_KEY = "mypadidoc_assistant_device_token";

type AssistantChatProps = {
  initialMessage: string;
  startVoice: boolean;
  onClose: () => void;
};

export default function AssistantChat({ initialMessage, startVoice, onClose }: AssistantChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState<"connecting" | "ready" | "error">("connecting");
  const [isTyping, setIsTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [speechMessage, setSpeechMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const socketRef = useRef<WebSocket | null>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const initialSentRef = useRef(false);
  const voiceStartedRef = useRef(false);

  const startDictation = () => {
    const speechWindow = window as SpeechWindow;
    const Recognition = speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition;
    if (!Recognition) {
      setSpeechMessage("Speech-to-text is not available in this browser. Type your message instead.");
      return;
    }

    setSpeechMessage("");
    const recognition = new Recognition();
    recognition.lang = "en-NG";
    recognition.interimResults = false;
    recognition.continuous = false;
    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0]?.transcript ?? "")
        .join(" ")
        .trim();
      if (transcript) setDraft((current) => [current.trim(), transcript].filter(Boolean).join(" "));
    };
    recognition.onerror = ({ error }) => {
      setSpeechMessage(error === "not-allowed" ? "Allow microphone access to dictate a message." : "Speech-to-text stopped. You can type your message instead.");
      setIsListening(false);
    };
    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };
    recognitionRef.current = recognition;
    setIsListening(true);
    recognition.start();
  };

  useEffect(() => {
    let disposed = false;
    let socket: WebSocket | null = null;
    let readyTimer = 0;
    let sessionReady = false;
    let retriedUnauthorized = false;

    const setConnectionError = (message: string) => {
      if (disposed) return;
      window.clearTimeout(readyTimer);
      setStatus("error");
      setIsTyping(false);
      setErrorMessage(message);
    };

    const getDeviceToken = async (forceRegister = false) => {
      const storedToken = forceRegister ? null : sessionStorage.getItem(DEVICE_TOKEN_KEY);
      if (storedToken) return storedToken;

      const controller = new AbortController();
      const registrationTimeout = window.setTimeout(() => controller.abort(), 10000);
      let response: Response;
      try {
        response = await fetch(`${API_BASE_URL}/api/assistant/devices/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
        });
      } finally {
        window.clearTimeout(registrationTimeout);
      }
      const data = await response.json().catch(() => null);
      if (!response.ok || typeof data?.token !== "string") {
        throw new Error(data?.detail || "Could not start a mypadidoc session.");
      }
      sessionStorage.setItem(DEVICE_TOKEN_KEY, data.token);
      return data.token as string;
    };

    const connect = async (forceRegister = false) => {
      try {
        const token = await getDeviceToken(forceRegister);
        if (disposed) return;

        const apiUrl = new URL(API_BASE_URL);
        apiUrl.protocol = apiUrl.protocol === "https:" ? "wss:" : "ws:";
        apiUrl.pathname = "/ws/assistant/";
        apiUrl.search = "";
        socket = new WebSocket(apiUrl);
        socketRef.current = socket;

        socket.addEventListener("open", () => {
          readyTimer = window.setTimeout(() => {
            socket?.close();
            setConnectionError("mypadidoc did not respond. Check your connection and try again.");
          }, 10000);
          socket?.send(JSON.stringify({ type: "session.start", token, mode: "text", area: null }));
        });

        socket.addEventListener("message", (event: MessageEvent<string>) => {
          let payload: Record<string, unknown>;
          try {
            payload = JSON.parse(event.data) as Record<string, unknown>;
          } catch {
            return;
          }

          if (payload.type === "session.ready") {
            sessionReady = true;
            window.clearTimeout(readyTimer);
            setStatus("ready");
            setErrorMessage("");
            if (initialMessage.trim() && !initialSentRef.current) {
              socket?.send(JSON.stringify({ type: "user.text", text: initialMessage.trim() }));
              setMessages((current) => [...current, { id: crypto.randomUUID(), sender: "user", text: initialMessage.trim() }]);
              initialSentRef.current = true;
              setIsTyping(true);
            }
            return;
          }

          if (payload.type === "assistant.thinking") {
            setIsTyping(true);
            return;
          }

          if (payload.type === "assistant.message") {
            const text = typeof payload.text === "string" ? payload.text : "";
            if (text) {
              setMessages((current) => [...current, {
                id: typeof payload.id === "string" ? payload.id : crypto.randomUUID(),
                sender: "assistant",
                text,
              }]);
            }
            setIsTyping(false);
            return;
          }

          if (payload.type === "user.transcript" && payload.final === true && typeof payload.text === "string") {
            setDraft((current) => [current.trim(), payload.text as string].filter(Boolean).join(" "));
            return;
          }

          if (payload.type === "error") {
            setIsTyping(false);
            if (!sessionReady && payload.code === "unauthorized" && !retriedUnauthorized) {
              retriedUnauthorized = true;
              sessionStorage.removeItem(DEVICE_TOKEN_KEY);
              window.clearTimeout(readyTimer);
              socket?.close();
              void connect(true);
              return;
            }
            const message = typeof payload.message === "string" ? payload.message : "The assistant couldn't complete that message. Please try again.";
            setErrorMessage(message);
          }
        });

        socket.addEventListener("error", () => {
          if (!disposed) setConnectionError("Couldn't reach mypadidoc. Check your connection and try again.");
        });
        socket.addEventListener("close", () => {
          if (!disposed && !sessionReady) {
            setConnectionError("Couldn't connect to mypadidoc. Check your connection and try again.");
          }
        });
      } catch (error) {
        const message = error instanceof DOMException && error.name === "AbortError"
          ? "Connection timed out. Check your connection and try again."
          : error instanceof Error ? error.message : "Couldn't start a mypadidoc session.";
        setConnectionError(message);
      }
    };

    void connect();
    return () => {
      disposed = true;
      window.clearTimeout(readyTimer);
      if (socketRef.current === socket) socketRef.current = null;
      socket?.close();
    };
  }, [initialMessage, retryCount]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (status === "ready" && startVoice && !voiceStartedRef.current) {
      voiceStartedRef.current = true;
      startDictation();
    }
  }, [status, startVoice]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      recognitionRef.current?.stop();
    };
  }, [onClose]);

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = draft.trim();
    const socket = socketRef.current;
    if (!text || status !== "ready" || isTyping || socket?.readyState !== WebSocket.OPEN) return;
    socket.send(JSON.stringify({ type: "user.text", text }));
    setMessages((current) => [...current, { id: crypto.randomUUID(), sender: "user", text }]);
    setDraft("");
    setErrorMessage("");
    setIsTyping(true);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex flex-col bg-[#063e7a] text-white" role="dialog" aria-modal="true" aria-label="Chat with mypadidoc">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-white/15 px-4 md:px-8">
        <div>
          <p className="font-semibold">mypadidoc</p>
          <p className="text-xs text-white/70" aria-live="polite">
            {status === "connecting" ? "Connecting…" : status === "ready" ? (isTyping ? "Thinking…" : "Connected") : "Connection unavailable"}
          </p>
        </div>
        <button onClick={onClose} className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/15" aria-label="Close chat">
          <i className="ri-close-line text-2xl" />
        </button>
      </header>

      <main className="flex min-h-0 flex-1 justify-center px-3 py-4 md:px-6">
        <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white text-foreground-900 shadow-2xl">
          <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto p-4 md:p-6" aria-live="polite" aria-relevant="additions text">
            {messages.length === 0 && status === "ready" && (
              <p className="my-auto text-center text-sm text-foreground-500">Start with what is on your mind. You can share as much or as little as you like.</p>
            )}
            {messages.map((message) => (
              <div key={message.id} className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${message.sender === "user" ? "ml-auto rounded-br-sm bg-primary-100 text-foreground-900" : "mr-auto rounded-bl-sm bg-background-100 text-foreground-800"}`}>
                {message.text}
              </div>
            ))}
            {isTyping && <p className="mr-auto rounded-2xl bg-background-100 px-4 py-3 text-sm text-foreground-500">mypadidoc is responding…</p>}
            {errorMessage && <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">{errorMessage}</p>}
            {status === "error" && (
              <button onClick={() => setRetryCount((count) => count + 1)} className="w-fit rounded-full bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700">
                Retry connection
              </button>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="border-t border-background-200 px-4 py-3 md:px-6">
            <p className="mb-2 text-xs leading-relaxed text-foreground-500">This service offers general health guidance, not a diagnosis. For an emergency, contact local emergency services.</p>
            <form onSubmit={sendMessage} className="flex items-end gap-2">
              <textarea
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    event.currentTarget.form?.requestSubmit();
                  }
                }}
                rows={1}
                maxLength={4000}
                disabled={status !== "ready" || isTyping}
                placeholder={status === "ready" ? "Describe what's going on…" : "Waiting for a connection…"}
                aria-label="Your message"
                className="max-h-32 min-h-11 min-w-0 flex-1 resize-y rounded-xl border border-background-300 px-3 py-2.5 text-sm text-foreground-900 outline-none focus:border-primary-500 disabled:bg-background-100"
              />
              <button type="button" onClick={isListening ? () => recognitionRef.current?.stop() : startDictation} disabled={status !== "ready" || isTyping} className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${isListening ? "bg-red-100 text-red-700" : "text-primary-700 hover:bg-primary-50"} disabled:opacity-50`} aria-label={isListening ? "Stop dictation" : "Dictate a message"} title={isListening ? "Stop dictation" : "Dictate a message"}>
                <i className={`ri-${isListening ? "stop" : "mic"}-line text-xl`} />
              </button>
              <button type="submit" disabled={status !== "ready" || isTyping || !draft.trim()} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50" aria-label="Send message">
                <i className="ri-send-plane-fill text-lg" />
              </button>
            </form>
            {speechMessage && <p className="mt-2 text-xs text-foreground-600" role="status">{speechMessage}</p>}
          </div>
        </div>
      </main>
    </div>
  );
}