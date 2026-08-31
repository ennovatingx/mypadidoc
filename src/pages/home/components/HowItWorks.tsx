const STEPS = [
  {
    icon: "ri-whatsapp-line",
    title: "Start a Chat",
    description: "Message us on WhatsApp or dial our USSD code. No app to download — it works on any phone.",
    bg: "bg-emerald-50",
  },
  {
    icon: "ri-file-list-3-line",
    title: "Describe what's going on",
    description: "Tell us how you're feeling in your own words. No medical jargon needed — just talk to us.",
    bg: "bg-violet-50",
  },
  {
    icon: "ri-lightbulb-flash-line",
    title: "Get guided next steps",
    description: "We'll ask the right questions and give you clear, structured guidance based on what you shared.",
    bg: "bg-amber-50",
  },
  {
    icon: "ri-user-follow-line",
    title: "Connect with professionals",
    description: "When needed, we connect you to trusted, verified doctors and counsellors for further care.",
    bg: "bg-sky-50",
  },
];

export default function HowItWorks() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="how-it-works" className="relative w-full py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col gap-4 max-w-[500px]">
            <h2 className="text-2xl md:text-[40px] font-medium text-foreground-950 leading-tight">
              How does it work?
            </h2>
            <p className="text-base md:text-lg text-foreground-500 leading-relaxed">
              mypadidoc is very easy to use. Start by telling us what's going on. There's no limit on how much you can share. After that, just answer a few quick questions. Once that's done, you'll get clear next steps and, if needed, a connection to a real provider.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => scrollToId("signup-form")}
              className="py-2.5 px-6 rounded-full rounded-tr-none bg-primary-500 text-white text-base font-medium hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
            >
              Join the pilot
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 border border-background-200 rounded-lg p-3 hover:border-background-300 transition-colors"
            >
              <div className={`${step.bg} flex justify-center py-8 md:py-10 rounded-lg`}>
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                  <i className={`${step.icon} text-3xl md:text-4xl text-foreground-700`}></i>
                </div>
              </div>
              <div className="flex flex-col gap-2 px-1 pb-2">
                <h3 className="text-lg font-semibold text-foreground-950 text-center">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-foreground-500 text-center leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}