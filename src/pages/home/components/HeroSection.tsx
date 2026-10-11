import { useState, type CSSProperties, type FormEvent } from "react";
import AssistantChat from "@/pages/home/components/AssistantChat";
import portraitManOne from "@/assets/portraits/portrait-man-one.jpg";
import portraitManTwo from "@/assets/portraits/portrait-man-two.jpg";
import portraitWomanOne from "@/assets/portraits/portrait-woman-one.jpg";
import portraitWomanTwo from "@/assets/portraits/portrait-woman-two.jpg";

const AVATARS = [
  portraitWomanTwo,
  portraitManOne,
  portraitWomanOne,
];

const MOMENTS = [
  { photo: portraitWomanTwo, text: "I know what to do next", position: "left-[5%] top-[16%] md:left-[8%] md:top-[5%]", size: "h-[150px] w-[150px] md:h-[200px] md:w-[200px]", shape: "rounded-br-none", float: "hero-float-1" },
  { photo: portraitManOne, text: "Help me understand this", position: "left-[58%] top-[4%] md:left-[32%] md:top-0", size: "h-[82px] w-[82px] md:h-[100px] md:w-[100px]", shape: "rounded-bl-none", float: "hero-float-2" },
  { photo: portraitWomanOne, text: "Guidance that feels personal", position: "left-[34%] top-[49%] md:left-[48%] md:top-[25%]", size: "h-[112px] w-[112px] md:h-[160px] md:w-[160px]", shape: "rounded-bl-none", float: "hero-float-3" },
  { photo: portraitManTwo, text: "The right care, when needed", position: "right-[5%] top-[32%] md:right-[10%] md:top-[8%]", size: "h-[96px] w-[96px] md:h-[130px] md:w-[130px]", shape: "rounded-br-none", float: "hero-float-4" },
];

function TypingCard({ text, delay = "0s" }: { text: string; delay?: string }) {
  return <div className="w-fit rounded-2xl bg-white px-4 py-2.5 shadow-lg"><p className="hero-type text-sm font-medium text-foreground-700" style={{ "--typing-width": `${text.length}ch`, "--typing-steps": text.length, animationDelay: delay } as CSSProperties}>{text}</p></div>;
}

export default function HeroSection() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [composerText, setComposerText] = useState("");
  const [startVoice, setStartVoice] = useState(false);
  const openChat = (useVoice = false) => {
    setChatMessage(composerText.trim());
    setComposerText("");
    setStartVoice(useVoice);
    setChatOpen(true);
  };
  return <section id="hero" className="relative flex w-full flex-col items-center overflow-hidden">
    <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-7 px-4 pt-8 md:gap-9 md:px-6 md:pt-12"><div className="flex flex-col gap-5 text-center md:gap-6"><h1 className="animate-fade-up mx-auto max-w-[900px] text-3xl font-medium leading-[1.15] text-foreground-950 sm:text-4xl md:text-5xl md:leading-[4.5rem] lg:text-[64px]" style={{ animationDelay: "0.1s" }}>Your health journey deserves a guide, not just an answer.</h1><p className="animate-fade-up mx-auto max-w-[720px] text-base leading-relaxed text-foreground-500 md:text-lg" style={{ animationDelay: "0.25s" }}>mypadidoc is your personalized AI health navigator: a more accessible way to understand your concerns, recognise urgency, learn about your health, and find the right next step in care.</p></div>
      <form onSubmit={(event) => { event.preventDefault(); openChat(); }} className="animate-fade-up mx-auto flex w-full max-w-[680px] items-center gap-1.5 rounded-[28px] border border-background-300 bg-white p-2 shadow-lg shadow-foreground-950/5" style={{ animationDelay: "0.4s" }}><input value={composerText} onChange={(event) => setComposerText(event.target.value)} className="min-w-0 flex-1 bg-transparent px-3 text-sm text-foreground-950 outline-none placeholder:text-foreground-400 md:text-base" placeholder="What would you like to talk about?" aria-label="Start a conversation" /><button type="button" disabled className="flex h-10 w-10 shrink-0 cursor-not-allowed items-center justify-center rounded-full text-foreground-300" aria-label="Voice dictation unavailable" title="Voice dictation unavailable"><i className="ri-mic-line text-xl" /></button><button type="submit" disabled className="flex h-11 w-11 shrink-0 cursor-not-allowed items-center justify-center rounded-full bg-primary-300 text-white" aria-label="Conversation unavailable" title="Conversation unavailable"><i className="ri-arrow-up-line text-xl" /></button></form><p className="-mt-4 text-center text-xs text-foreground-400">Chat and voice are temporarily unavailable. Join the pilot below.</p>
      <div className="flex items-center justify-center gap-3"><div className="flex">{AVATARS.map((src, i) => <div key={src} className="h-10 w-10 overflow-hidden rounded-full border-2 border-white md:h-12 md:w-12" style={{ marginLeft: i ? "-14px" : 0 }}><img src={src} alt="Community member portrait" className="h-full w-full object-cover" /></div>)}</div><p className="text-sm font-medium text-foreground-500">Built for everyday life in Nigeria. Starting in Lagos.</p></div></div>
    <div className="relative mt-8 h-[340px] w-full max-w-[1100px] md:mt-10 md:h-[500px]">{MOMENTS.map((moment, index) => <div key={moment.text} className={`absolute ${moment.position} ${moment.float} flex flex-col items-center gap-3`}><div className={`${moment.size} ${moment.shape} overflow-hidden rounded-full bg-primary-100 shadow-lg shadow-foreground-950/10`}><img src={moment.photo} alt="" className="h-full w-full object-cover object-top" /></div><div className="hidden md:block"><TypingCard text={moment.text} delay={`${index * 0.7}s`} /></div></div>)}</div>{chatOpen && <AssistantChat initialMessage={chatMessage} startVoice={startVoice} onClose={() => setChatOpen(false)} />}
  </section>;
}
