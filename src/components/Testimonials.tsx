"use client";
import { useReveal } from "@/hooks/useReveal";

const TESTIMONIALS = [
  { quote: "We're at 10,000 patients doing over \$4 million a year. The builders and architects were all on the same page from day one.", author: "Kyle Skjei", role: "Lake Dental Care", metric: "\$4M annual revenue" },
  { quote: "Less than 100 days from demo to move-in. You won't be disappointed with the quality of people at Primus.", author: "Tom Zulandt", role: "Madison Veterinary Hospital", metric: "<100 days to move-in" },
  { quote: "Production is up 50-60%. We closed the old practice Thursday, opened the new one Monday.", author: "Dan Gleason", role: "Gleason Dental", metric: "50-60% production ↑" },
  { quote: "Primus earned my trust by being honest and upfront. Having somebody on my side who knows that business — it's hugely helpful. A really big deal.", author: "Benjamin Zimmerman", role: "Bluegrass Veterinary Hospital", metric: "Honest & direct" },
  { quote: "These guys are first-class. Everybody I worked with was fantastic.", author: "Hasan Karkoutly", role: "Capital Endodontics", metric: "First-class delivery" },
  { quote: "I'm asked over and over again, 'Who did your construction?'", author: "Stephen Huber", role: "Huber Advanced Dentistry", metric: "Constant referrals" },
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} aria-label="Client testimonials" className={`px-6 md:px-10 py-16 md:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[1280px] mx-auto">
        <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-4">
          Client Results
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark mb-12 leading-tight">
          Don&apos;t take our word for it.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-7 hover:-translate-y-1 hover:shadow-lg hover:shadow-dark/5 transition-all flex flex-col">
              <span className="inline-block bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full mb-5 self-start">
                {t.metric}
              </span>
              <p className="font-display text-[1.05rem] italic text-dark/80 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <span className="font-semibold text-dark text-sm">{t.author}</span>
                <span className="text-light text-sm block">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
