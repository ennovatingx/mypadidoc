import { useEffect, useRef, useState } from "react";
import { API_BASE_URL, type AuthResponse } from "@/config/api";

type GoogleCredentialResponse = { credential?: string };

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: GoogleCredentialResponse) => void;
          }) => void;
          renderButton: (
            parent: HTMLElement,
            options: { theme: "outline"; size: "large"; width: number; text: "continue_with" },
          ) => void;
        };
      };
    };
  }
}

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined;

type GoogleSignInButtonProps = {
  disabled?: boolean;
  onSuccess: (auth: AuthResponse) => void;
  onError: (message: string) => void;
};

export default function GoogleSignInButton({ disabled = false, onSuccess, onError }: GoogleSignInButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID || !buttonRef.current || disabled) return;

    let cancelled = false;
    const render = () => {
      if (cancelled || !window.google || !buttonRef.current) return;

      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: async ({ credential }) => {
          if (!credential) {
            onError("Google didn’t return a sign-in credential. Please try again.");
            return;
          }

          try {
            const response = await fetch(`${API_BASE_URL}/api/auth/google/`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ id_token: credential }),
            });
            const data = await response.json().catch(() => null);
            if (!response.ok) {
              onError(data?.detail || "Google sign-in couldn’t be completed. Please try again.");
              return;
            }

            const auth = data as AuthResponse;
            sessionStorage.setItem("mypadidoc_access_token", auth.access);
            sessionStorage.setItem("mypadidoc_refresh_token", auth.refresh);
            onSuccess(auth);
          } catch {
            onError("Google sign-in couldn’t be completed. Check your connection and try again.");
          }
        },
      });
      buttonRef.current.replaceChildren();
      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
        width: Math.min(buttonRef.current.clientWidth || 448, 448),
        text: "continue_with",
      });
      setReady(true);
    };

    if (window.google) {
      render();
      return () => {
        cancelled = true;
      };
    }

    const script = document.querySelector<HTMLScriptElement>('script[src="https://accounts.google.com/gsi/client"]');
    if (script) {
      script.addEventListener("load", render, { once: true });
      return () => {
        cancelled = true;
        script.removeEventListener("load", render);
      };
    }

    return () => {
      cancelled = true;
    };
  }, [disabled, onError, onSuccess]);

  if (!GOOGLE_CLIENT_ID) return null;

  return (
    <div className={disabled ? "pointer-events-none opacity-50" : undefined}>
      <div ref={buttonRef} className="min-h-[44px] w-full" />
      {!ready && <p className="mt-2 text-center text-xs text-foreground-400">Loading Google sign-in…</p>}
    </div>
  );
}
