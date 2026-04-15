'use client';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const PAIRS = [
  {
    problem: 'Budget surprises after you\'ve already committed',
    solution: 'Real numbers before you break ground — not after',
  },
  {
    problem: 'Your GC disappears until they need a decision',
    solution: 'One point of contact from preconstruction through punch list',
  },
  {
    problem: 'Nobody asks the hard questions until it\'s too late',
    solution: 'We stress-test every assumption before you spend a dollar',
  },
  {
    problem: 'Design team and builder aren\'t aligned',
    solution: 'We coordinate your design team — not just react to them',
  },
  {
    problem: 'Change orders that erode your confidence and your capital',
    solution: 'A scope that\'s locked, a price that holds, a team that delivers',
  },
];

export default function ProblemSolution() {
  return (
    <section aria-label="Problems and solutions" className="px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12 tracking-tight leading-tight">
            The problems you&apos;ve seen.{' '}
            <span className="text-purple-700">The solutions you haven&apos;t.</span>
          </h2>
        </ScrollReveal>

        <div className="flex flex-col gap-5">
          {PAIRS.map((pair, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-sm">
                {/* Problem */}
                <div className="bg-[#111] text-white p-8 rounded-t-xl md:rounded-l-xl md:rounded-tr-none">
                  <span className="text-red-400/60 text-xs font-semibold uppercase tracking-widest block mb-3">
                    The Problem
                  </span>
                  <p className="text-white/80 leading-relaxed">{pair.problem}</p>
                </div>
                {/* Solution */}
                <div className="bg-white border border-gray-200 border-l-4 border-l-purple-700 p-8 rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                  <span className="text-purple-700 text-xs font-semibold uppercase tracking-widest block mb-3">
                    The Primus Way
                  </span>
                  <p className="text-gray-800 font-medium leading-relaxed">{pair.solution}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
