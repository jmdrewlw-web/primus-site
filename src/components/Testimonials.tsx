"use client";
import { useReveal } from "@/hooks/useReveal";

const TESTIMONIALS = [
  { quote: "We're at 10,000 patients doing over $4 million a year. The builders and architects were all on the same page from day one.", author: "Kyle Skjei", role: "Lake Dental Care", metric: "$4M annual revenue", featured: true },
  { quote: "Production is up 50-60%. We closed the old practice Thursday, opened the new one Monday. Our new facility is a draw because of how nice it looks.", author: "Dan Gleason", role: "Gleason Dental", metric: "50-60% production ↑", featured: true },
  { quote: "Less than 100 days from demo to move-in. You won't be disappointed with the quality of people at Primus.", author: "Tom Zulandt", role: "Madison Veterinary Hospital", metric: "<100 days to move-in", featured: false },
  { quote: "New patient flow has increased 3x in the last couple months. The design truly transformed our practice.", author: "Jonathan Titus", role: "Titus Dentistry", metric: "3× new patients", featured: false },
  { quote: "These guys are first-class. Everybody I worked with was fantastic.", author: "Hasan Karkoutly", role: "Capital Endodontics", metric: "First-class delivery", featured: false },
  { quote: "Primus earned my trust by being honest and upfront. Having somebody on my side who knows that business — it's hugely helpful.", author: "Benjamin Zimmerman", role: "Bluegrass Veterinary Hospital", metric: "Honest & direct", featured: false },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  const featured = TESTIMONIALS.filter((t) => t.featured);
  const rest = TESTIMONIALS.filter((t) => !t.featured);

  return (
    <section ref={ref} className={`px-6 md:px-10 py-16 md:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[1280px] mx-auto">
        <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-4">
          Client Results
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark mb-12 leading-tight">
          Don&apos;t take our word for it.
        </h2>

        {/* Featured */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-8 hover:-translate-y-1 hover:shadow-lg hover:shadow-dark/5 transition-all">
              <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-5">
                {t.metric}
              </span>
              <p className="font-display text-lg italic text-dark/80 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="font-semibold text-dark text-sm">{t.author}</span>
                <span className="text-light text-sm ml-2">{t.role}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rest */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rest.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-dark/5 transition-all">
              <span className="inline-block bg-accent/10 text-accent text-[.7rem] font-bold px-2.5 py-0.5 rounded-full mb-4">
                {t.metric}
              </span>
              <p className="text-dark/70 text-sm italic leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="font-semibold text-dark text-xs">{t.author}</span>
                <span className="text-light text-xs block">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
