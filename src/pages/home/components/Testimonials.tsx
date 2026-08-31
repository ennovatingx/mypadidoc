const TESTIMONIALS = [
  {
    quote: "Before using this service, I was confused about whether my symptoms were serious. I often got conflicting advice online. With mypadidoc, I finally understood what to do and when to see a doctor. I feel much more confident managing my health now.",
    name: "Chioma N.",
    location: "Lagos, Nigeria",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20young%20Nigerian%20woman%20in%20her%20late%2020s%2C%20warm%20confident%20smile%2C%20natural%20soft%20lighting%2C%20clean%20neutral%20background%2C%20editorial%20portrait%20photography&width=200&height=200&seq=testimonial-1&orientation=squarish",
  },
  {
    quote: "This service was a game-changer for me. I had been experiencing anxiety and didn't know where to turn. The first conversation was so gentle and non-judgmental. I got connected to a counsellor within hours. It's a huge relief to know there's support available.",
    name: "Ibrahim S.",
    location: "Abuja, Nigeria",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20young%20Nigerian%20man%20in%20his%20early%2030s%2C%20friendly%20warm%20expression%2C%20natural%20soft%20lighting%2C%20clean%20neutral%20background%2C%20editorial%20portrait%20photography&width=200&height=200&seq=testimonial-2&orientation=squarish",
  },
  {
    quote: "I used to rely on random online searches for health info, but it often led to confusion. Now, with mypadidoc, I get reliable, expert-backed guidance instantly. It's convenient and reassuring to have trustworthy answers when I need them, right on my WhatsApp.",
    name: "Ngozi O.",
    location: "Enugu, Nigeria",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20Nigerian%20woman%20in%20her%2030s%20with%20kind%20gentle%20eyes%2C%20soft%20smile%2C%20natural%20soft%20lighting%2C%20clean%20neutral%20background%2C%20editorial%20portrait%20photography&width=200&height=200&seq=testimonial-3&orientation=squarish",
  },
  {
    quote: "As a first-time mom, I was cautious about health advice during pregnancy. When I had questions about reproductive health, I was able to get guidance without judgement. The expert advice suggested safe next steps and gave me peace of mind.",
    name: "Adebola T.",
    location: "Ibadan, Nigeria",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20Nigerian%20woman%20in%20her%20late%2020s%2C%20motherly%20warm%20expression%2C%20natural%20soft%20lighting%2C%20clean%20neutral%20background%2C%20editorial%20portrait%20photography&width=200&height=200&seq=testimonial-4&orientation=squarish",
  },
  {
    quote: "I was dealing with multiple health concerns and worried about getting the right care. Thanks to mypadidoc, I learned how to prioritize my symptoms and was connected to the right specialist. The clear guidance has been invaluable to my health journey.",
    name: "Kunle A.",
    location: "Port Harcourt, Nigeria",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20young%20Nigerian%20man%20in%20his%20late%2020s%2C%20athletic%20friendly%20smile%2C%20natural%20soft%20lighting%2C%20clean%20neutral%20background%2C%20editorial%20portrait%20photography&width=200&height=200&seq=testimonial-5&orientation=squarish",
  },
  {
    quote: "After a scary health scare, I was afraid to seek help. This service provided a safe way to ask questions and get clear recommendations. Knowing I can rely on expert guidance anytime, even on USSD without data, makes managing my health so much easier.",
    name: "Halima K.",
    location: "Kano, Nigeria",
    avatar: "https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20a%20young%20Nigerian%20woman%20in%20her%20early%2020s%20wearing%20a%20hijab%2C%20gentle%20warm%20smile%2C%20natural%20soft%20lighting%2C%20clean%20neutral%20background%2C%20editorial%20portrait%20photography&width=200&height=200&seq=testimonial-6&orientation=squarish",
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-[40px] font-medium text-foreground-950 leading-tight">
            Read what people are saying about us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="border border-background-200 rounded-lg p-5 md:p-6 flex flex-col justify-between h-full"
            >
              <div className="flex flex-col gap-3">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className="ri-star-fill text-sm text-amber-400"></i>
                  ))}
                </div>
                <p className="text-sm md:text-base text-foreground-700 leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-5 pt-4 border-t border-background-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-foreground-950">{t.name}</p>
                  <p className="text-xs text-foreground-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}