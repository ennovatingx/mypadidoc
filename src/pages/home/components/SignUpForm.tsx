import { useState, useRef, FormEvent } from "react";

const INTEREST_OPTIONS = [
  { value: "physical_health", label: "Physical Health" },
  { value: "mental_health", label: "Mental Health" },
  { value: "reproductive_health", label: "Reproductive Health" },
];

const API_BASE = "https://5213-102-88-166-31.ngrok-free.app";

export default function SignUpForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedInterest, setSelectedInterest] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    const honeypot = (formData.get("phone_alt") as string) || "";
    if (honeypot.trim()) {
      setStatus("success");
      setStatusMessage("Thanks! We'll be in touch.");
      return;
    }

    if (!selectedInterest) {
      setStatus("error");
      setStatusMessage("Please select a health area you're interested in.");
      return;
    }

    const body = {
      full_name: (formData.get("full_name") as string) || "",
      phone_number: (formData.get("phone_number") as string) || "",
      city: (formData.get("city") as string) || "",
      interest: selectedInterest,
    };

    setStatus("idle");
    setStatusMessage("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/api/users/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        setStatus("success");
        setStatusMessage("Thanks! We'll be in touch about the pilot.");
        form.reset();
        setSelectedInterest("");
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
    <section id="signup-form" className="relative w-full py-16 md:py-24 px-4 md:px-6 bg-background-100">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-[40px] font-medium text-foreground-950 leading-tight mb-3">
            Join the pilot
          </h2>
          <p className="text-base text-foreground-500 leading-relaxed">
            We're starting in Lagos. Sign up and we'll let you know as soon as we're ready for you.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div>
            <label htmlFor="full_name" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Full name
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              required
              placeholder="Your full name"
              disabled={loading}
              className="w-full px-4 py-3 text-sm rounded-xl border border-background-300 bg-white text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="phone_number" className="block text-sm font-medium text-foreground-700 mb-1.5">
              Phone number
            </label>
            <input
              id="phone_number"
              name="phone_number"
              type="tel"
              required
              placeholder="e.g. 0803 123 4567"
              disabled={loading}
              className="w-full px-4 py-3 text-sm rounded-xl border border-background-300 bg-white text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-foreground-700 mb-1.5">
              City / Area
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              defaultValue="Lagos"
              placeholder="Lagos"
              disabled={loading}
              className="w-full px-4 py-3 text-sm rounded-xl border border-background-300 bg-white text-foreground-950 placeholder:text-foreground-400 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-foreground-700 mb-2">
              What are you most interested in?
            </span>
            <div className="flex flex-wrap gap-2">
              {INTEREST_OPTIONS.map((option) => {
                const isSelected = selectedInterest === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    disabled={loading}
                    onClick={() => setSelectedInterest(option.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer whitespace-nowrap border ${
                      isSelected
                        ? "bg-primary-100 text-primary-800 border-primary-300"
                        : "bg-white text-foreground-600 border-background-300 hover:border-foreground-300"
                    } disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              required
              disabled={loading}
              className="mt-1 w-4 h-4 rounded border-background-300 text-primary-500 focus:ring-primary-400 cursor-pointer accent-primary-500 disabled:cursor-not-allowed"
            />
            <label htmlFor="consent" className="text-xs md:text-sm text-foreground-500 leading-relaxed">
              I agree to be contacted about the mypadidoc pilot. My data will be handled in line with Nigeria's Data Protection Act (NDPR).
            </label>
          </div>

          <div className="form-safety-alt" aria-hidden="true">
            <label htmlFor="phone_alt">Phone alt</label>
            <input
              id="phone_alt"
              name="phone_alt"
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
              "Request early access"
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