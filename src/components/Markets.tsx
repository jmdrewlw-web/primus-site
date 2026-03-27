"use client";

const MARKETS = [
  "Dental",
  "Veterinary",
  "Medical & Healthcare",
  "Daycare & Childcare",
  "Multifamily & Senior Housing",
  "Light Industrial & Distribution",
  "Multi-Site Operators",
];

export default function Markets() {
  const marqueeText = MARKETS.join("  ·  ");

  return (
    <section aria-label="Markets served" className="py-12 overflow-hidden border-y border-border">
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] text-dark/20 font-bold mx-8 flex-shrink-0"
            >
              {marqueeText}&nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
