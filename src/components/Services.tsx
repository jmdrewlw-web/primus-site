"use client";
import { useReveal } from "@/hooks/useReveal";

const SERVICES = [
  { n: "01", title: "Preconstruction", desc: "Budget validation, site evaluation, constructability review. We find problems before they find your wallet." },
  { n: "02", title: "General Construction", desc: "Full delivery from foundation to CO. One team, one contract, one point of accountability." },
  { n: "03", title: "Design-Build", desc: "Architect and builder aligned from day one. Faster timeline, fewer change orders, better outcomes." },
  { n: "04", title: "Construction Management", desc: "For owners who want oversight without the overhead. We manage the process, you stay focused on your business." },
  { n: "05", title: "Development Advisory", desc: "Site selection, deal evaluation, capital planning. The strategic layer that makes the building decision make sense." },
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`bg-dark py-20 md:py-28 transition-all duration-700 ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-4">
          What We Do
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-white mb-14 leading-tight">
          Full-service delivery.<br />
          <em className="text-accent">One team.</em>
        </h2>

        <div className="space-y-0">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="group border-t border-white/[.08] py-8 md:py-10 flex flex-col md:flex-row md:items-start gap-4 md:gap-12 hover:bg-white/[.03] px-4 -mx-4 rounded-lg transition-all"
            >
              <span className="font-display text-4xl font-bold text-white/[.08] group-hover:text-accent/30 transition-colors w-16 flex-shrink-0">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                  {s.title}
                </h3>
                <p className="text-white/50 leading-relaxed max-w-xl">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
