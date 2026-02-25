"use client";
import { useReveal } from "@/hooks/useReveal";

const PROBLEMS = [
  "Budget surprises after you've already committed",
  "Your GC disappears until they need a decision",
  "Nobody asks the hard questions until it's too late",
  "Design team and builder aren't aligned",
  "Change orders that erode your confidence and your capital",
];

const SOLUTIONS = [
  "Real numbers before you break ground — not after",
  "One point of contact from preconstruction through punch list",
  "We stress-test every assumption before you spend a dollar",
  "We coordinate your design team — not just react to them",
  "A scope that's locked, a price that holds, a team that delivers",
];

export default function ProblemSolution() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`px-6 md:px-10 py-16 md:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-0">
        {/* Problems */}
        <div className="md:pr-12 md:border-r border-border">
          <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-red-500/80 block mb-4">
            Sound Familiar?
          </span>
          <div className="space-y-5">
            {PROBLEMS.map((p, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-red-400/70 font-bold text-lg mt-0.5">✕</span>
                <p className="text-mid leading-relaxed">{p}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions */}
        <div className="md:pl-12">
          <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-4">
            The Primus Difference
          </span>
          <div className="space-y-5">
            {SOLUTIONS.map((s, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-accent font-bold text-lg mt-0.5">✓</span>
                <p className="text-dark leading-relaxed font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
