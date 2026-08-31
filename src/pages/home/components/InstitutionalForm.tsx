import { useState, useRef, FormEvent } from "react";

const ORG_TYPES = [
  { value: "hospital", label: "Hospital" },
  { value: "counselling_body", label: "Counselling Body" },
  { value: "ngo", label: "NGO" },
  { value: "other", label: "Other" },
];

const API_BASE = "https://5213-102-88-166-31.ngrok-free.app";

export default function InstitutionalForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    const honeypot = (formData.get("company_alt") as string) || "";
    if (honeypot.trim()) {
      setStatus("success");
      setStatusMessage("Thanks! We'll be in touch.");
      return;
    }

    const body = {
      organization_name: (formData.get("organization_name") as string) || "",
      contact_name: (formData.get("contact_name") as string) || "",
      email: (formData.get("email") as string) || "",
      phone: (formData.get("phone") as string) || "",
      organization_type: (formData.get("organization_type") as string) || "",
      message: (formData.get("message") as string) || "",
    };

    setStatus("idle");
    setStatusMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/partners/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Thanks! We'll be in touch about partnering with mypadidoc.");
        form.reset();
      } else {
        let serverMsg = "";
        try {
          const data = await res.json();
          serverMsg = data?.message || data?.detail || "";
        } catch {
          /* ignore */
        }
        setStatus("error");
        setStatusMessage(serverMsg || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Couldn't submit. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="institutional-form" className="relative w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[40px] font-medium text-foreground-950 leading-tight mb-3">
            Partner with us
          </h2>
          <p className="text-base text-foreground-500 leading-relaxed">
            Are you a hospital, counselling association, NGO, or employer? We'd love to explore how we can work together.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label htmlFor="organization_name" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Organization name
            </label>
            <input
              id="organization_name"
              name="organization_name"
              type="text"
              required
              placeholder="Your organization"
              disabled={loading}
              className="w-full px-4 py-3 text-sm rounded-xl border border-background-300 bg-white text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="contact_name" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Contact name
            </label>
            <input
              id="contact_name"
              name="contact_name"
              type="text"
              required
              placeholder="Your full name"
              disabled={loading}
              className="w-full px-4 py-3 text-sm rounded-xl border border-background-300 bg-white text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@organization.com"
              disabled={loading}
              className="w-full px-4 py-3 text-sm rounded-xl border border-background-300 bg-white text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="e.g. 0803 123 4567"
              disabled={loading}
              className="w-full px-4 py-3 text-sm rounded-xl border border-background-300 bg-white text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="organization_type" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Type of organization
            </label>
            <select
              id="organization_type"
              name="organization_type"
              required
              defaultValue=""
              disabled={loading}
              className="w-full px-4 py-3 text-sm rounded-xl border border-background-300 bg-white text-foreground-950 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors cursor-pointer appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem",
                paddingRight: "2.5rem",
              }}
            >
              <option value="" disabled>
                Select type
              </option>
              {ORG_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Message <span className="text-foreground-400 font-normal">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              maxLength={500}
              placeholder="Tell us a bit about how you'd like to partner..."
              disabled={loading}
              className="w-full px-4 py-3 text-sm rounded-xl border border-background-300 bg-white text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
            ></textarea>
          </div>

          <div className="form-safety-alt" aria-hidden="true">
            <label htmlFor="company_alt">Company alt</label>
            <input
              id="company_alt"
              name="company_alt"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              readOnly
              aria-hidden="true"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-primary-500 text-white rounded-full rounded-tr-none font-semibold text-sm md:text-base hover:bg-primary-600 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Submitting...
              </span>
            ) : (
              "Get in touch"
            )}
          </button>

          {status !== "idle" && !loading && (
            <p
              className={`text-sm text-center ${
                status === "success" ? "text-primary-700" : "text-accent-700"
              }`}
            >
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}