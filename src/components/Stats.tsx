"use client";
import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/useReveal";

function Counter({ end, suffix = "", duration = 1800 }: { end: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const { ref, visible } = useReveal(0.3);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [visible, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-dark">
        {val.toLocaleString()}{suffix}
      </div>
    </div>
  );
}

const STATS = [
  { value: 1000, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Years in Business" },
  { value: 4, suffix: "", label: "Regional Offices" },
  { value: 23, suffix: "", label: "Year Longest Partnership" },
];

export default function Stats() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`px-6 md:px-10 py-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[1280px] mx-auto bg-cream-light rounded-2xl p-10 md:p-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <Counter end={s.value} suffix={s.suffix} />
              <p className="text-light text-sm font-medium tracking-wide uppercase mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
