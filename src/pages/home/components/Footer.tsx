export default function Footer() {
  return (
    <footer className="relative w-full bg-background-100 pt-16 md:pt-20 pb-8 md:pb-12 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-12 md:mb-16">
          {/* Brand */}
          <div className="max-w-[320px]">
            <a href="/" className="flex items-center gap-2 font-semibold text-xl text-foreground-950 mb-4">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <i className="ri-heart-pulse-fill text-white text-lg"></i>
              </div>
              mypadidoc
            </a>
            <p className="text-sm text-foreground-500 leading-relaxed">
              AI-powered health triage for Nigeria — on WhatsApp or USSD. No app needed. Starting in Lagos, built for all of Nigeria.
            </p>
          </div>

          {/* Links columns */}
          <div className="flex flex-wrap gap-10 md:gap-16 lg:gap-20">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground-950 mb-1">Company</h4>
              <button
                onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-foreground-500 hover:text-foreground-800 transition-colors text-left cursor-pointer whitespace-nowrap"
              >
                How it works
              </button>
              <button
                onClick={() => document.getElementById("what-we-help")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-foreground-500 hover:text-foreground-800 transition-colors text-left cursor-pointer whitespace-nowrap"
              >
                What we help with
              </button>
              <button
                onClick={() => document.getElementById("signup-form")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-foreground-500 hover:text-foreground-800 transition-colors text-left cursor-pointer whitespace-nowrap"
              >
                Join the pilot
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground-950 mb-1">Partner</h4>
              <button
                onClick={() => document.getElementById("institutional-form")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-foreground-500 hover:text-foreground-800 transition-colors text-left cursor-pointer whitespace-nowrap"
              >
                Institutional interest
              </button>
              <button
                onClick={() => document.getElementById("why-different")?.scrollIntoView({ behavior: "smooth" })}
                className="text-sm text-foreground-500 hover:text-foreground-800 transition-colors text-left cursor-pointer whitespace-nowrap"
              >
                Why mypadidoc
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground-950 mb-1">Legal</h4>
              <a href="/privacy" className="text-sm text-foreground-500 hover:text-foreground-800 transition-colors whitespace-nowrap">
                Privacy policy
              </a>
              <a href="/terms" className="text-sm text-foreground-500 hover:text-foreground-800 transition-colors whitespace-nowrap">
                Terms of service
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-foreground-950 mb-1">Contact</h4>
              <a
                href="mailto:hello@mypadidoc.com"
                className="text-sm text-foreground-500 hover:text-foreground-800 transition-colors whitespace-nowrap"
              >
                hello@mypadidoc.com
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-background-300 mb-8"></div>

        {/* Social + copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background-200 flex items-center justify-center hover:bg-background-300 transition-colors" aria-label="LinkedIn">
              <i className="ri-linkedin-fill text-foreground-600"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background-200 flex items-center justify-center hover:bg-background-300 transition-colors" aria-label="X (Twitter)">
              <i className="ri-twitter-x-fill text-foreground-600"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background-200 flex items-center justify-center hover:bg-background-300 transition-colors" aria-label="Instagram">
              <i className="ri-instagram-line text-foreground-600"></i>
            </a>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-foreground-500">
            <p>&copy; {new Date().getFullYear()} mypadidoc. All rights reserved.</p>
            <p>Lagos, Nigeria</p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-6 border-t border-background-200">
          <p className="text-xs text-foreground-500 leading-relaxed text-center max-w-[800px] mx-auto">
            <strong className="text-foreground-700">mypadidoc does not replace emergency care.</strong>{" "}
            If this is an emergency, please call your nearest emergency number or go to the closest hospital immediately.
            Your data is handled in line with Nigeria's Data Protection Act (NDPR).
          </p>
        </div>
      </div>
    </footer>
  );
}