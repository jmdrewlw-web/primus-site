"use client";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const STATS = [
  { end: 1000, suffix: "+", label: "Projects Delivered", duration: 2000 },
  { end: 50, suffix: "+", label: "Years in Business", duration: 1500 },
  { end: 4, suffix: "", label: "Regional Offices", duration: 800 },
  { end: 23, suffix: "", label: "Year Longest Partnership", duration: 1200 },
];

function Counter({ end, suffix, duration, active }: { end: number; suffix: string; duration: number; active: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const steps = 40;
    const inc = end / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= end) { setCount(end); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [active, end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export default function Stats() {
  const { ref, visible } = useReveal(0.3);

  return (
    <section ref={ref} className="px-6 md:px-10 py-16">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {STATS.map((s, i) => (
            <div 
              key={i} 
              className={`text-center md:border-r last:border-r-0 border-border/50 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="font-display text-[clamp(2.4rem,5vw,3.6rem)] font-bold text-dark leading-none mb-2">
                <Counter end={s.end} suffix={s.suffix} duration={s.duration} active={visible} />
              </div>
              <div className="rule-accent mx-auto mb-3" style={{ width: '24px', height: '2px' }} />
              <p className="text-light text-[.78rem] font-semibold tracking-[.12em] uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
