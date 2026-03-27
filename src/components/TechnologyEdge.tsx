"use client";
import { useReveal } from "@/hooks/useReveal";

const CAPABILITIES = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Faster Preconstruction",
    desc: "AI-assisted estimating and scope analysis cuts weeks off the front end — so you get to real numbers before the competition even has a proposal ready.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Proactive Risk Detection",
    desc: "Pattern recognition across 500+ completed projects flags problems before they cost money — scope gaps, coordination conflicts, budget risks.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Real-Time Client Intelligence",
    desc: "Project dashboards that speak English, not construction jargon. Your budget, schedule, and decisions — always current, always clear.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "24-Year Knowledge Base",
    desc: "Every lesson from $770M in delivered projects, instantly searchable. What took a decade to learn now takes minutes to apply.",
  },
];

export default function TechnologyEdge() {
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      aria-label="Technology and AI capabilities"
      className={`px-6 md:px-10 py-20 md:py-28 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="md:flex md:items-start md:gap-16 lg:gap-24 mb-16">
          {/* Left — headline + body */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="text-[.72rem] font-semibold tracking-[.2em] uppercase text-accent block mb-4">
              How We Work Smarter
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark leading-tight mb-6">
              Technology Has Always Been{" "}
              <em className="text-accent">Our Edge.</em>
            </h2>
            <div className="rule-accent mb-8" />
            <div className="space-y-4 text-mid leading-relaxed text-[.95rem]">
              <p>
                We adopted cloud-based project management before most GCs had email on their phones. We ran real-time budget tracking when the industry was still faxing pay apps.
              </p>
              <p>
                Now we use AI to compress estimating timelines from weeks to days, flag scope gaps before they become change orders, and give clients real-time project intelligence they can actually understand.
              </p>
              <p className="font-semibold text-dark">
                Same discipline. Same accountability. Sharper tools.
              </p>
            </div>
          </div>

          {/* Right — capability cards */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CAPABILITIES.map((c, i) => (
              <div
                key={c.title}
                className={`bg-white rounded-xl p-6 border border-border/50 hover:border-accent/20 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 group ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-accent/10 text-accent rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {c.icon}
                </div>
                <h3 className="font-display text-[1rem] font-bold text-dark mb-2">
                  {c.title}
                </h3>
                <p className="text-mid text-[.85rem] leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note — tone anchor */}
        <div className="bg-dark rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
          </div>
          <p className="text-white/60 text-[.92rem] leading-relaxed">
            <span className="text-white font-semibold">We&apos;re not a tech company.</span>{" "}
            We&apos;re builders who happen to be smarter about technology than anyone else in the room. This isn&apos;t about replacing people — it&apos;s about giving our people better tools.
          </p>
        </div>
      </div>
    </section>
  );
}
