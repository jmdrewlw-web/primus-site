"use client";
import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const FAQS = [
  { q: "What types of commercial construction does Primus Companies do?", a: "We specialize in dental offices, veterinary clinics, medical facilities, daycare centers, multifamily housing, light industrial, and multi-site rollouts. We offer preconstruction, general construction, design-build, construction management, and development advisory services." },
  { q: "Where does Primus Companies operate?", a: "We have offices in Cedar Rapids (headquarters), Nashville, Omaha, Minneapolis, and Kansas City. As a general contractor, we focus within a few hours of our offices but travel for specific engagements and follow multi-site customers wherever projects take us — across 15+ states." },
  { q: "When should we bring in a GC?", a: "As early as possible. The biggest cost decisions happen before construction starts — site selection, design direction, budget validation. We add the most value in preconstruction. But if you've already got drawings ready to price, we plug in wherever you are." },
  { q: "What is design-build construction?", a: "Design-build is a delivery method where the architect and builder work together under one contract from day one. This means faster timelines, fewer change orders, and better alignment between design intent and construction reality. We've delivered hundreds of design-build projects across multiple industries." },
  { q: "How long has Primus Companies been in business?", a: "Primus Companies was founded in 2002 — 24 years of delivering commercial construction projects. In that time, we've completed 500+ projects totaling $770M in delivered value across 15+ states." },
  { q: "Does Primus Companies work with multi-site operators?", a: "Absolutely. Multi-site operators are one of our core specialties. We follow our clients wherever the next project takes us, providing consistent quality, pricing, and project management across multiple locations. Our longest client partnership spans 23 years." },
  { q: "What is the Project Pathfinder?", a: "It's a free, no-commitment consultation that takes about 5 minutes to initiate. You tell us what you're planning — no drawings needed — and our team reviews your situation, pressure-tests the numbers, and delivers a personalized report with honest next steps, realistic budget ranges, and a recommended path forward." },
  { q: "What size projects do you take on?", a: "It varies by industry and vertical. A $5 million medical project can have as much complexity as a $20 million multifamily build. It's more about scope and alignment on vision than a dollar amount. We've done 2,000 square feet and 200,000 square feet and everything in between." },
  { q: "Do you help with financing?", a: "Yes. We have relationships with a variety of financing partners — traditional banks, SBA lenders, and alternative capital sources. Our preconstruction work gives lenders exactly what they need: validated budgets, realistic timelines, and a credible delivery plan. For qualified multi-site operators, we can facilitate 100% financing introductions." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const { ref, visible } = useReveal();

  return (
    <section
      ref={ref}
      aria-label="Frequently asked questions"
      className={`px-6 md:px-10 py-16 md:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="max-w-[800px] mx-auto">
        <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-4">
          Common Questions
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark mb-12 leading-tight">
          What you&apos;re probably <em className="text-accent">wondering.</em>
        </h2>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-cream-light rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={open === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-dark pr-4">{f.q}</span>
                <span className={`text-accent text-xl flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
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
