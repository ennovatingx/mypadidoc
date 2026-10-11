import { useEffect, useState } from "react";
import logoGreen from "../../../../logo_files/mpd_page3_green_logo_white_bg.svg";

const NAV_LINKS = [
  { label: "How it works", target: "how-it-works" },
  { label: "What we help with", target: "what-we-help" },
  { label: "Why mypadidoc", target: "why-different" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <section className="flex w-full px-6 md:px-10 pt-4 md:pt-5 pb-4 md:pb-6 sticky top-0 z-[800]">
      <nav
        className={`flex w-full max-w-[1330px] h-[72px] md:h-[80px] mx-auto justify-between items-center px-5 md:px-6 rounded-3xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/60 backdrop-blur-md shadow-lg shadow-foreground-950/5"
            : "bg-white/40 backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center shrink-0" aria-label="mypadidoc home">
          <img
            src={logoGreen}
            alt="mypadidoc"
            className="w-[112px] md:w-[124px] h-auto mix-blend-multiply"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-sm font-medium text-foreground-600 hover:text-foreground-950 transition-colors cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <button
            onClick={() => scrollTo("signup-form")}
            className="py-2.5 px-6 rounded-full rounded-tr-none bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Get Started
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <i className={`ri-${mobileOpen ? "close" : "menu"}-line text-2xl text-foreground-800`}></i>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-x-4 top-[88px] z-[799] bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="text-base font-medium text-foreground-700 hover:text-foreground-950 transition-colors text-left cursor-pointer whitespace-nowrap py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("signup-form")}
            className="mt-2 py-3 px-6 rounded-full rounded-tr-none bg-primary-500 text-white text-base font-medium hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap"
          >
            Get Started
          </button>
        </div>
      )}
    </section>
  );
}
