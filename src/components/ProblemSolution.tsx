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
    <section ref={ref} aria-label="Why clients choose Primus Companies" className={`px-6 md:px-10 py-20 md:py-28 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Problem side */}
          <div className="bg-dark rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none p-8 md:p-12">
            <span className="text-[.72rem] font-semibold tracking-[.2em] uppercase text-red-400/80 block mb-6">
              Sound Familiar?
            </span>
            <div className="space-y-5">
              {PROBLEMS.map((p, i) => (
                <div 
                  key={i} 
                  className={`flex gap-3 items-start transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                >
                  <span className="text-red-400/60 text-sm mt-[2px] flex-shrink-0">✕</span>
                  <p className="text-white/60 leading-relaxed text-[.95rem]">{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution side */}
          <div className="bg-white rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none p-8 md:p-12 shadow-xl shadow-dark/5">
            <span className="text-[.72rem] font-semibold tracking-[.2em] uppercase text-accent block mb-6">
              The Primus Difference
            </span>
            <div className="space-y-5">
              {SOLUTIONS.map((s, i) => (
                <div 
                  key={i} 
                  className={`flex gap-3 items-start transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                  style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                >
                  <span className="text-accent text-sm mt-[2px] flex-shrink-0">✓</span>
                  <p className="text-dark leading-relaxed font-medium text-[.95rem]">{s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
