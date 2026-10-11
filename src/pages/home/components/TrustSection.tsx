export default function TrustSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-primary-50 rounded-2xl md:rounded-3xl p-8 md:p-16 flex flex-col items-center gap-8 md:gap-10">
          {/* Heading */}
          <div className="text-center max-w-[700px]">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
              Built around everyday life
            </p>
            <h2 className="text-2xl md:text-[40px] font-medium text-foreground-950 leading-tight mb-3">
              Built for people, culture, and care
            </h2>
            <p className="text-base md:text-lg text-foreground-500 leading-relaxed">
              We are designing mypadidoc around how Nigerians seek information, support one another, and make everyday health decisions. AI can help people navigate care — it does not replace the people who provide it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full max-w-[900px]">
            <div className="rounded-2xl bg-white p-5 text-center">
              <i className="ri-map-pin-heart-line text-3xl text-primary-500"></i>
              <h3 className="mt-3 font-semibold text-foreground-950">Made for our context</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-500">Guidance shaped around local realities, language, and the choices people make every day.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 text-center">
              <i className="ri-book-open-line text-3xl text-primary-500"></i>
              <h3 className="mt-3 font-semibold text-foreground-950">Education that empowers</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-500">Clear, accessible health information that helps people understand and manage their journeys.</p>
            </div>
            <div className="rounded-2xl bg-white p-5 text-center">
              <i className="ri-stethoscope-line text-3xl text-primary-500"></i>
              <h3 className="mt-3 font-semibold text-foreground-950">A bridge to care</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-500">Technology that helps people reach appropriate professionals and services when they need more support.</p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-[500px] h-px bg-primary-200"></div>

          <p className="max-w-[640px] text-center text-sm text-foreground-500 leading-relaxed">
            Starting in Nigeria, our goal is to build a trusted bridge between people and healthcare across Africa.
          </p>

          {/* CTA */}
          <button
            onClick={() => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" })}
            className="py-2.5 px-6 rounded-full rounded-tr-none bg-primary-500 text-white text-base font-medium hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Join the pilot
          </button>
        </div>
      </div>
    </section>
  );
}
