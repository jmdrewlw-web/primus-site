"use client";
import { useReveal } from "@/hooks/useReveal";

const SERVICES = [
  { num: "01", title: "Preconstruction", desc: "Budget validation, site evaluation, constructability review. We find problems before they find your wallet." },
  { num: "02", title: "General Construction", desc: "Full delivery from foundation to CO. One team, one contract, one point of accountability." },
  { num: "03", title: "Design-Build", desc: "Architect and builder aligned from day one. Faster timeline, fewer change orders, better outcomes." },
  { num: "04", title: "Construction Management", desc: "For owners who want oversight without the overhead. We manage the process, you stay focused on your business." },
  { num: "05", title: "Development Advisory", desc: "Site selection, deal evaluation, capital planning. The strategic layer that makes the building decision make sense." },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`bg-dark py-24 md:py-32 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="md:flex md:justify-between md:items-end mb-16">
          <div>
            <span className="text-[.72rem] font-semibold tracking-[.2em] uppercase text-accent block mb-4">
              What We Do
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-tight">
              Full-service delivery.<br />
              <em className="text-accent">One team.</em>
            </h2>
          </div>
          <div className="rule-accent mt-6 md:mt-0" style={{ width: '48px', background: 'rgba(107,47,160,0.4)' }} />
        </div>

        <div className="space-y-0">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className={`group border-t border-white/[.06] py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-12 hover:bg-white/[.03] px-6 -mx-6 rounded-lg transition-all duration-300 cursor-default ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${0.1 + i * 0.08}s` }}
            >
              <span className="font-display text-3xl md:text-4xl font-bold text-white/[.06] group-hover:text-accent/40 transition-colors duration-300 w-16 flex-shrink-0">
                {s.num}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 md:w-[280px] flex-shrink-0">
                {s.title}
              </h3>
              <p className="text-white/40 group-hover:text-white/60 leading-relaxed max-w-xl transition-colors duration-300 text-[.92rem]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
