export default function CTABanner() {
  return (
    <section className="relative w-full py-20 md:py-28 px-4 md:px-6 bg-primary-500 overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute top-8 left-[10%] w-12 h-12 rounded-full bg-white/10"></div>
      <div className="absolute top-16 right-[15%] w-8 h-8 rounded-full bg-white/10"></div>
      <div className="absolute bottom-12 left-[20%] w-10 h-10 rounded-full bg-white/10"></div>
      <div className="absolute bottom-20 right-[25%] w-14 h-14 rounded-full bg-white/10"></div>
      <div className="absolute top-24 left-[45%] w-6 h-6 rounded-full bg-white/10"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[700px] mx-auto text-center flex flex-col gap-6 md:gap-8 items-center">
        <h2 className="text-3xl md:text-5xl font-medium text-white leading-tight">
          Accessing healthcare shouldn't be hard.
        </h2>
        <button
          onClick={() => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" })}
          className="py-3 px-8 rounded-full rounded-tr-none bg-foreground-950 text-white text-base font-medium hover:bg-foreground-800 transition-colors cursor-pointer whitespace-nowrap"
        >
          Join the pilot
        </button>
      </div>
    </section>
  );
}