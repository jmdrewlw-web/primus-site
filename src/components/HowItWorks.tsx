"use client";
import { useReveal } from "@/hooks/useReveal";

const STEPS = [
  { num: "01", title: "Tell us what you're planning", desc: "Fill out the Pathfinder intake — takes about 5 minutes. No drawings needed. No site locked down. If you're early, that's the best time to talk." },
  { num: "02", title: "We do our homework", desc: "Our team reviews your situation, pressure-tests the numbers, and builds a plan around your budget, timeline, and goals — not ours." },
  { num: "03", title: "You get a clear starting point", desc: "A personalized Pathfinder with honest next steps, realistic budget ranges, and a recommended path forward. Not a sales pitch." },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} aria-label="How the Project Pathfinder works" className={`px-6 md:px-10 py-20 md:py-28 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[.72rem] font-semibold tracking-[.2em] uppercase text-accent block mb-4">
            How It Starts
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark">
            Three steps to <em className="text-accent">clarity.</em>
          </h2>
          <div className="rule-accent mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-xl p-8 border border-border/50 hover:border-accent/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.2 + i * 0.15}s` }}
            >
              {/* Big ghost number */}
              <span className="absolute top-4 right-5 font-display text-[4rem] font-bold text-dark/[.03] group-hover:text-accent/[.06] leading-none select-none transition-colors duration-500">
                {s.num}
              </span>
              
              {/* Step badge */}
              <div className="w-10 h-10 bg-accent/10 text-accent font-bold text-sm rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {s.num}
              </div>
              
              <h3 className="font-display text-lg font-bold text-dark mb-3">{s.title}</h3>
              <p className="text-mid leading-relaxed text-[.92rem]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
