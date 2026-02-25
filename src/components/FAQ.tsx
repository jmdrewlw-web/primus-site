"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const FAQS = [
  { q: "When should we bring in a GC?", a: "As early as possible. The biggest cost decisions happen before construction starts — site selection, design direction, budget validation. We add the most value in preconstruction. But if you've already got drawings, we'll plug in wherever you are." },
  { q: "Do you do design-build?", a: "Yes. We coordinate the full design-build process — architect selection, design management, permitting, and construction. One contract, one team, one point of accountability." },
  { q: "Where do you work?", a: "We're based in Cedar Rapids, Iowa with offices in Nashville, Minneapolis, and Chicago. We've delivered projects in 15 states across the Midwest and Southeast." },
  { q: "What if my project isn't a fit?", a: "We'll tell you. That's one of the things our clients appreciate most. Start with the Pathfinder and we'll give you a straight answer within a few days." },
  { q: "What size projects do you take on?", a: "Most of our projects range from $500K to $15M. If your project is outside that range, we'll still have the conversation — we may have the right solution or the right referral." },
  { q: "Do you help with financing?", a: "We don't lend money, but we help you build the case. Our preconstruction work gives lenders exactly what they need — validated budgets, realistic timelines, and a credible delivery plan. For qualified multi-site operators, we can facilitate 100% financing introductions." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`px-6 md:px-10 py-16 md:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[800px] mx-auto">
        <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-4">
          Common Questions
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark mb-12 leading-tight">
          What you&apos;re probably <em className="text-accent">wondering.</em>
        </h2>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="bg-cream-light rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
              >
                <span className="font-semibold text-dark pr-4">{f.q}</span>
                <span className={`text-accent text-xl flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-5 text-mid leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
