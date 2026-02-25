"use client";
import { useReveal } from "@/hooks/useReveal";

const STEPS = [
  {
    n: "01",
    title: "Tell us what you're planning",
    desc: "Fill out the Pathfinder intake — takes about 5 minutes. No drawings needed. No site locked down. If you're early, that's the best time to talk.",
  },
  {
    n: "02",
    title: "We do our homework",
    desc: "Our team reviews your situation, pressure-tests the numbers, and builds a plan around your budget, timeline, and goals — not ours.",
  },
  {
    n: "03",
    title: "You get a clear starting point",
    desc: "A personalized Pathfinder with honest next steps, realistic budget ranges, and a recommended path forward. Not a sales pitch.",
  },
];

export default function HowItWorks() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`px-6 md:px-10 py-16 md:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14">
          <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-4">
            How It Starts
          </span>
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark">
            Three steps to <em className="text-accent">clarity.</em>
          </h2>
          <p className="text-light text-[.95rem] mt-4">The Pathfinder is how every Primus project starts.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-dark/5 transition-all duration-300 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Ghost number */}
              <span className="absolute top-4 right-6 font-display text-[3.5rem] font-bold text-dark/[.04] leading-none select-none">
                {s.n}
              </span>
              <span className="inline-flex items-center justify-center w-10 h-10 bg-accent/10 text-accent font-bold text-sm rounded-lg mb-5">
                {s.n}
              </span>
              <h3 className="font-display text-xl font-bold text-dark mb-3">{s.title}</h3>
              <p className="text-mid leading-relaxed text-[.95rem]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
