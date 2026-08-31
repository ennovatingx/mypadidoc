const AREAS = [
  {
    icon: "ri-run-line",
    title: "Physical Health",
    description: "Describe your symptoms — headaches, fever, pain, fatigue — and we'll help you figure out what to do next, from rest tips to when you should see a doctor.",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    severity: false,
  },
  {
    icon: "ri-mental-health-line",
    title: "Mental Health",
    description: "A safe, private first conversation about how you're feeling. We assess where you are, so you get the right level of support — not too little, not too much.",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    severity: true,
  },
  {
    icon: "ri-heart-pulse-line",
    title: "Reproductive Health",
    description: "Track your cycle, get guidance on reproductive health questions, and know when to seek in-person care — all in one private conversation.",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    severity: false,
  },
];

export default function WhatWeHelpWith() {
  return (
    <section id="what-we-help" className="relative w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
            Powered by AI Chatbot
          </p>
          <h2 className="text-2xl md:text-[40px] font-medium text-foreground-950 leading-tight mb-4">
            What we help with
          </h2>
          <p className="text-base md:text-lg text-foreground-500 max-w-[700px] mx-auto leading-relaxed">
            Three health areas, one chatbot conversation. Start on WhatsApp or USSD — we listen, guide, assess, and connect you to real providers when needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {AREAS.map((area, i) => (
            <div
              key={i}
              className={`${area.bg} rounded-2xl p-6 md:p-8 flex flex-col gap-5 ${area.severity ? 'ring-2 ring-amber-400/60 shadow-lg shadow-amber-100/40' : ''}`}
            >
              <div className="flex items-center gap-3">
                <div className={`${area.iconBg} w-12 h-12 rounded-xl flex items-center justify-center shrink-0`}>
                  <i className={`${area.icon} text-2xl ${area.iconColor}`}></i>
                </div>
                {area.severity && (
                  <span className="px-2.5 py-1 bg-amber-200/70 text-amber-800 text-xs font-semibold rounded-full whitespace-nowrap">
                    Severity Assessment
                  </span>
                )}
              </div>

              <div className="w-full h-px bg-foreground-200/30"></div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold text-foreground-950">
                  {area.title}
                </h3>
                <p className="text-sm md:text-base text-foreground-500 leading-relaxed">
                  {area.description}
                </p>
              </div>

              {area.severity && (
                <div className="mt-1 space-y-2.5">
                  <p className="text-xs font-semibold text-foreground-600 uppercase tracking-wider">
                    Severity Score
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-white/70 rounded-full h-2.5 overflow-hidden">
                        <div className="h-full w-[25%] bg-emerald-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-semibold text-emerald-700 whitespace-nowrap min-w-[60px]">
                        Low
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-white/70 rounded-full h-2.5 overflow-hidden">
                        <div className="h-full w-[55%] bg-amber-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-semibold text-amber-700 whitespace-nowrap min-w-[60px]">
                        Moderate
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-full bg-white/70 rounded-full h-2.5 overflow-hidden">
                        <div className="h-full w-[88%] bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-xs font-semibold text-red-700 whitespace-nowrap min-w-[60px]">
                        High
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-foreground-400 mt-1">
                    Our chatbot asks the right questions, then routes you to the right care — from self-guided tools for low severity to immediate provider connection for high.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}