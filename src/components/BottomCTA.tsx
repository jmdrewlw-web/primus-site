"use client";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function BottomCTA() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`px-6 md:px-10 py-20 md:py-28 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[720px] mx-auto text-center">
        <div className="rule-accent mx-auto mb-8" />
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-bold text-dark mb-4 leading-tight">
          Not sure where to start?
        </h2>
        <p className="text-mid text-[1.08rem] mb-2">
          That&apos;s exactly what the Pathfinder is for.
        </p>
        <p className="text-light text-[.92rem] mb-10 max-w-md mx-auto leading-relaxed">
          Five minutes. No commitment. Just a clear picture of where your project stands and what comes next.
        </p>
        <Link
          href="/project-pathfinder"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-10 py-4 rounded-md transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-[2px] text-[1rem]"
        >
          Get a Project Pathfinder →
        </Link>
      </div>
    </section>
  );
}
