export default function ChatPreview() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-primary-50 rounded-2xl md:rounded-3xl overflow-hidden relative p-8 md:p-16">
          {/* Decorative squiggles */}
          <div className="absolute top-12 left-12 md:top-20 md:left-24 text-primary-300">
            <svg width="36" height="44" viewBox="0 0 36 44" fill="none">
              <path d="M4 40C4 20 20 4 32 4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="32" cy="4" r="3" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute top-14 right-20 md:top-22 md:right-48 text-violet-300">
            <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
              <path d="M28 4C28 20 12 32 4 32" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="4" cy="32" r="3" fill="currentColor" />
            </svg>
          </div>
          <div className="absolute bottom-16 left-20 md:bottom-20 md:left-40 text-sky-300">
            <svg width="32" height="48" viewBox="0 0 32 48" fill="none">
              <path d="M16 44C16 28 28 16 28 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="28" cy="8" r="3" fill="currentColor" />
            </svg>
          </div>

          {/* Header */}
          <div className="text-center mb-8 md:mb-12 relative z-10">
            <p className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-3">
              AI Chatbot — Mental Health Assessment
            </p>
            <h2 className="text-2xl md:text-4xl font-medium text-foreground-950 mb-3">
              One chatbot for all three health areas
            </h2>
            <p className="text-base md:text-lg text-foreground-500">
              Here's what a mental health conversation looks like — with severity scoring built in
            </p>
          </div>

          {/* Chat mockup */}
          <div className="max-w-[520px] mx-auto relative z-10">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-background-200">
              {/* WhatsApp header */}
              <div className="bg-emerald-600 px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <i className="ri-robot-2-line text-white text-lg"></i>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">mypadidoc</p>
                  <p className="text-emerald-100 text-xs">Online</p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="px-4 py-5 space-y-3 bg-[#E5DDD5]">
                {/* Bot greeting */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-sm text-foreground-800 leading-relaxed">
                      Welcome to mypadidoc. I'm here to help with physical health, mental health, or reproductive health. What would you like to talk about today?
                    </p>
                    <p className="text-[10px] text-foreground-400 mt-1 text-right">14:02</p>
                  </div>
                </div>

                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-emerald-100 rounded-lg rounded-tr-none px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-sm text-foreground-800 leading-relaxed">
                      I've been feeling very down lately. Can't sleep, don't want to get out of bed. It's been like this for about two weeks.
                    </p>
                    <p className="text-[10px] text-emerald-600 mt-1 text-right">14:03</p>
                  </div>
                </div>

                {/* Bot — assessment questions */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-sm text-foreground-800 leading-relaxed mb-2">
                      I hear you. Thank you for sharing that with me. Let me ask a few questions to understand better:
                    </p>
                    <p className="text-sm text-foreground-800 leading-relaxed">
                      Over the last two weeks, how often have you felt little interest or pleasure in doing things?
                    </p>
                    <p className="text-[10px] text-foreground-400 mt-2 text-right">14:03</p>
                  </div>
                </div>

                {/* User response */}
                <div className="flex justify-end">
                  <div className="bg-emerald-100 rounded-lg rounded-tr-none px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-sm text-foreground-800 leading-relaxed">
                      Nearly every day. Nothing feels good anymore.
                    </p>
                    <p className="text-[10px] text-emerald-600 mt-1 text-right">14:04</p>
                  </div>
                </div>

                {/* Bot — severity assessment result */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none px-4 py-2.5 max-w-[90%] shadow-sm">
                    <p className="text-sm text-foreground-800 leading-relaxed mb-3">
                      Based on what you've shared, here's your severity assessment:
                    </p>

                    {/* Severity score visualization */}
                    <div className="space-y-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div className="h-full w-[25%] bg-emerald-500 rounded-full"></div>
                        </div>
                        <span className="text-[11px] font-medium text-emerald-700 whitespace-nowrap min-w-[55px]">
                          Low
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div className="h-full w-[55%] bg-amber-500 rounded-full"></div>
                        </div>
                        <span className="text-[11px] font-medium text-amber-700 whitespace-nowrap min-w-[55px]">
                          Moderate
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div className="h-full w-[88%] bg-red-500 rounded-full"></div>
                        </div>
                        <span className="text-[11px] font-medium text-red-700 whitespace-nowrap min-w-[55px]">
                          High
                        </span>
                      </div>
                    </div>

                    {/* Assessment badge */}
                    <div className="bg-amber-100 border border-amber-300 rounded-lg px-3 py-2.5 flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                        <i className="ri-alert-line text-white text-xs"></i>
                      </div>
                      <div>
                        <p className="text-xs text-amber-900 font-semibold mb-0.5">
                          Severity: Moderate-High
                        </p>
                        <p className="text-xs text-amber-800 leading-relaxed">
                          Your responses suggest significant distress. I'm connecting you to a counsellor who can help — this should not wait.
                        </p>
                      </div>
                    </div>

                    <p className="text-[10px] text-foreground-400 mt-2 text-right">14:04</p>
                  </div>
                </div>

                {/* Bot — next steps card */}
                <div className="flex justify-start">
                  <div className="bg-white rounded-lg rounded-tl-none px-4 py-2.5 max-w-[85%] shadow-sm">
                    <p className="text-sm text-foreground-800 leading-relaxed mb-2">
                      Here's what happens next:
                    </p>
                    <div className="space-y-1.5">
                      <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                        <p className="text-xs text-emerald-800 font-medium">Provider matched</p>
                        <p className="text-xs text-emerald-600">A verified counsellor in Lagos has been notified</p>
                      </div>
                      <div className="bg-sky-50 border border-sky-200 rounded-lg px-3 py-2">
                        <p className="text-xs text-sky-800 font-medium">Session within 24 hours</p>
                        <p className="text-xs text-sky-600">You'll receive a WhatsApp message with your appointment</p>
                      </div>
                      <div className="bg-violet-50 border border-violet-200 rounded-lg px-3 py-2">
                        <p className="text-xs text-violet-800 font-medium">Crisis resources</p>
                        <p className="text-xs text-violet-600">Urgent helplines saved to this chat for quick access</p>
                      </div>
                    </div>
                    <p className="text-[10px] text-foreground-400 mt-2 text-right">14:05</p>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="bg-white px-4 py-3 flex items-center gap-2 border-t border-background-200">
                <div className="w-8 h-8 rounded-full bg-background-100 flex items-center justify-center">
                  <i className="ri-attachment-2 text-foreground-400"></i>
                </div>
                <div className="flex-1 bg-background-100 rounded-full px-4 py-2">
                  <p className="text-sm text-foreground-400">Type a message...</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <i className="ri-send-plane-fill text-white text-sm"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}