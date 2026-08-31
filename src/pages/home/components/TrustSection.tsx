export default function TrustSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-primary-50 rounded-2xl md:rounded-3xl p-8 md:p-16 flex flex-col items-center gap-8 md:gap-10">
          {/* Heading */}
          <div className="text-center max-w-[700px]">
            <h2 className="text-2xl md:text-[40px] font-medium text-foreground-950 leading-tight mb-3">
              Complies with the highest standards of quality and data security
            </h2>
            <p className="text-base md:text-lg text-foreground-500 leading-relaxed">
              Please Note: Your data is confidential and secured by the Nigeria Data Protection Act (NDPR) standards.
            </p>
          </div>

          {/* Compliance badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-shield-check-line text-3xl md:text-4xl text-primary-500"></i>
                  <p className="text-[10px] font-semibold text-foreground-700 mt-1">NDPC</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-lock-line text-3xl md:text-4xl text-primary-500"></i>
                  <p className="text-[10px] font-semibold text-foreground-700 mt-1">NDPR</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-secure-payment-line text-3xl md:text-4xl text-primary-500"></i>
                  <p className="text-[10px] font-semibold text-foreground-700 mt-1">GDPR</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full max-w-[500px] h-px bg-primary-200"></div>

          {/* Trusted by */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <p className="text-lg md:text-xl font-medium text-foreground-700">Trusted By</p>
            <div className="flex items-center gap-2 text-foreground-400">
              <i className="ri-hospital-line text-2xl text-primary-400"></i>
              <span className="text-sm font-medium text-foreground-500">Nigerian Healthcare Partners</span>
            </div>
            <div className="flex items-center gap-2 text-foreground-400">
              <i className="ri-community-line text-2xl text-primary-400"></i>
              <span className="text-sm font-medium text-foreground-500">Counselling Associations</span>
            </div>
          </div>

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