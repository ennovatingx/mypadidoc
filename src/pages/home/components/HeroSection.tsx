const AVATARS = [
  "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20young%20Nigerian%20woman%20with%20warm%20smile%2C%20natural%20soft%20lighting%2C%20clean%20warm%20cream%20background%2C%20editorial%20portrait%20photography%2C%20sharp%20focus%20on%20face%2C%20upper%20body%20crop&width=200&height=200&seq=avatar-hero-1&orientation=squarish",
  "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20young%20Nigerian%20man%20with%20friendly%20confident%20expression%2C%20natural%20soft%20lighting%2C%20clean%20warm%20cream%20background%2C%20editorial%20portrait%20photography%2C%20sharp%20focus%20on%20face%2C%20upper%20body%20crop&width=200&height=200&seq=avatar-hero-2&orientation=squarish",
  "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20middle-aged%20Nigerian%20woman%20with%20kind%20gentle%20expression%2C%20natural%20soft%20lighting%2C%20clean%20warm%20cream%20background%2C%20editorial%20portrait%20photography%2C%20sharp%20focus%20on%20face%2C%20upper%20body%20crop&width=200&height=200&seq=avatar-hero-3&orientation=squarish",
];

export default function HeroSection() {
  const scrollToId = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative w-full flex flex-col items-center">
      {/* Text content */}
      <div className="flex flex-col w-full max-w-[1100px] mx-auto gap-8 md:gap-10 px-4 md:px-6 pt-8 md:pt-12">
        <div className="flex flex-col gap-5 md:gap-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] leading-[1.15] md:leading-[4.5rem] font-medium text-foreground-950 max-w-[900px] mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Health guidance on WhatsApp or <span className="font-semibold">*USSD</span> — no app needed.
          </h1>
          <p className="text-base md:text-lg text-foreground-500 max-w-[700px] mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.25s' }}>
            One chatbot conversation for physical health, mental health, and reproductive health. We assess severity, guide your next steps, and connect you to a real provider when it matters.
          </p>
        </div>

        <div className="flex justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToId("signup-form")}
            className="py-3 px-8 rounded-full rounded-tr-none bg-primary-500 text-white text-base font-medium hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Join the pilot
          </button>
        </div>

        {/* Avatar stack + tagline */}
        <div className="flex items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '0.55s' }}>
          <div className="flex">
            {AVATARS.map((src, i) => (
              <div
                key={i}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden"
                style={{ marginLeft: i === 0 ? 0 : '-14px' }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-foreground-500">Starting in Lagos. Built for all of Nigeria.</p>
        </div>
      </div>

      {/* Floating portrait composition */}
      <div className="relative w-full max-w-[1200px] mx-auto mt-10 md:mt-16 h-[400px] md:h-[500px] hidden md:block">
        {/* Left — large portrait yellow */}
        <div className="absolute left-[8%] top-[5%] flex flex-col items-center gap-3">
          <div className="w-[200px] h-[200px] rounded-full rounded-br-none overflow-hidden bg-amber-200">
            <img
              src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20smiling%20young%20Nigerian%20woman%20holding%20a%20phone%2C%20warm%20natural%20lighting%2C%20soft%20yellow%20background%20tint%2C%20lifestyle%20photography%2C%20candid%20joyful%20expression%2C%20upper%20body%20crop&width=400&height=400&seq=hero-portrait-1&orientation=squarish"
              alt=""
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="bg-white shadow-lg px-4 py-2.5 rounded-2xl rounded-tl-none w-fit">
            <p className="text-sm font-normal text-foreground-700">I feel better now</p>
          </div>
        </div>

        {/* Top center — blue portrait */}
        <div className="absolute left-[32%] top-0 flex flex-col items-center gap-2">
          <div className="w-[100px] h-[100px] rounded-full rounded-bl-none overflow-hidden bg-sky-200">
            <img
              src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20Nigerian%20man%20in%20professional%20attire%2C%20friendly%20expression%2C%20clean%20blue%20tinted%20background%2C%20headshot%20photography%2C%20sharp%20focus&width=200&height=200&seq=hero-portrait-2&orientation=squarish"
              alt=""
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="bg-white shadow-lg px-4 py-2.5 rounded-2xl rounded-tr-none w-fit">
            <p className="text-sm font-normal text-foreground-700">Analyze your symptoms</p>
          </div>
        </div>

        {/* Center — teal portrait */}
        <div className="absolute left-[48%] top-[25%] flex flex-col items-center gap-2">
          <div className="w-[160px] h-[160px] rounded-full rounded-bl-none overflow-hidden bg-teal-200">
            <img
              src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20Nigerian%20woman%20in%20her%2030s%20with%20warm%20motherly%20expression%2C%20soft%20natural%20lighting%2C%20teal%20tinted%20background%2C%20lifestyle%20photography%2C%20gentle%20smile&width=320&height=320&seq=hero-portrait-3&orientation=squarish"
              alt=""
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="bg-white shadow-lg px-4 py-2.5 rounded-2xl rounded-tl-none w-fit">
            <p className="text-sm font-normal text-foreground-700">Understand your health</p>
          </div>
        </div>

        {/* Right — purple portrait */}
        <div className="absolute right-[10%] top-[8%] flex flex-col items-center gap-2">
          <div className="w-[130px] h-[130px] rounded-full rounded-br-none overflow-hidden bg-violet-200">
            <img
              src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20young%20Nigerian%20man%20with%20glasses%2C%20intellectual%20look%2C%20friendly%20smile%2C%20soft%20purple%20tinted%20background%2C%20professional%20headshot%20photography&width=260&height=260&seq=hero-portrait-4&orientation=squarish"
              alt=""
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="bg-white shadow-lg px-4 py-2.5 rounded-2xl rounded-tr-none w-fit">
            <p className="text-sm font-normal text-foreground-700">Connected to a doctor</p>
          </div>
        </div>

        {/* Chat bubble floating left of center */}
        <div className="absolute left-[28%] top-[55%] bg-white shadow-lg px-4 py-2.5 rounded-2xl rounded-br-none w-fit">
          <p className="text-sm font-normal text-foreground-700">Thank you for coming through</p>
        </div>
      </div>

      {/* Mobile hero visual — simplified single portrait */}
      <div className="md:hidden w-full px-4 mt-8">
        <div className="w-[280px] h-[280px] rounded-full rounded-br-none mx-auto bg-amber-200 overflow-hidden flex items-center justify-center">
          <img
            src="https://readdy.ai/api/search-image?query=Portrait%20of%20a%20smiling%20young%20Nigerian%20woman%20holding%20a%20phone%2C%20warm%20natural%20lighting%2C%20soft%20yellow%20background%2C%20lifestyle%20photography%2C%20joyful%20expression%2C%20upper%20body%20crop&width=400&height=400&seq=hero-mobile&orientation=squarish"
            alt=""
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-3 mt-4 items-center">
          <div className="bg-white shadow-lg px-4 py-2.5 rounded-2xl rounded-tl-none w-fit">
            <p className="text-sm font-semibold text-foreground-700">Thank you for coming through</p>
          </div>
          <div className="bg-white shadow-lg px-4 py-2.5 rounded-2xl rounded-tr-none w-fit">
            <p className="text-sm font-semibold text-foreground-700">I feel better now</p>
          </div>
        </div>
      </div>
    </section>
  );
}