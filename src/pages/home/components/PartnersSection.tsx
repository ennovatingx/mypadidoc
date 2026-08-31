const PARTNER_TYPES = [
  "Hospitals",
  "Counselling Associations",
  "NGOs",
  "Employers",
  "Health Plans",
];

const BENEFITS = [
  {
    icon: "ri-global-line",
    title: "Reach every phone",
    bg: "bg-emerald-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    items: [
      "USSD works on any mobile phone — no data, no smartphone required",
      "WhatsApp for those with smartphones and data access",
      "Bridge the digital divide and serve underserved communities",
      "One number, one record across every channel",
    ],
  },
  {
    icon: "ri-flow-chart",
    title: "Smarter referrals",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    items: [
      "Triage patients before they reach your facility",
      "Connect the right person to the right level of care",
      "Verified provider network ensures quality handoffs",
      "Reduce unnecessary visits and wait times",
    ],
  },
  {
    icon: "ri-line-chart-line",
    title: "Better outcomes",
    bg: "bg-violet-50",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    items: [
      "Early health checks catch issues before they escalate",
      "Mental health first conversations reduce stigma",
      "Reproductive health guidance empowers patients",
      "Data insights help you understand community health needs",
    ],
  },
];

export default function PartnersSection() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="why-different" className="relative w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-[40px] font-medium text-foreground-950 leading-tight mb-6">
            Who we work with
          </h2>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 md:gap-x-10">
            {PARTNER_TYPES.map((type, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primary-500"></span>
                <p className="text-sm md:text-base font-medium text-foreground-700 whitespace-nowrap">{type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {BENEFITS.map((card, i) => (
            <div key={i} className={`${card.bg} rounded-2xl p-6 md:p-8 flex flex-col gap-5`}>
              <div className="flex flex-col gap-4">
                <div className={`${card.iconBg} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <i className={`${card.icon} text-2xl ${card.iconColor}`}></i>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-foreground-950">
                  {card.title}
                </h3>
              </div>
              <div className="w-full h-px bg-foreground-200/30"></div>
              <ul className="flex flex-col gap-3">
                {card.items.map((item, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center shrink-0 mt-0.5">
                      <i className="ri-check-line text-white text-xs"></i>
                    </div>
                    <p className="text-sm text-foreground-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            onClick={() => scrollToId("institutional-form")}
            className="py-2.5 px-6 rounded-full rounded-tr-none border border-foreground-300 text-foreground-700 text-base font-medium hover:bg-foreground-50 transition-colors cursor-pointer whitespace-nowrap"
          >
            Partner with us
          </button>
        </div>
      </div>
    </section>
  );
}