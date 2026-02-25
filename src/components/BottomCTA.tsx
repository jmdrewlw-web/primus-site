"use client";
import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";

export default function BottomCTA() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`px-6 md:px-10 py-16 md:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[620px] mx-auto text-center">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] font-bold text-dark mb-3">
          Not sure where to start?
        </h2>
        <p className="text-mid text-[1.1rem] mb-2">That&apos;s exactly what the Pathfinder is for.</p>
        <p className="text-light text-[.95rem] mb-10 max-w-md mx-auto">
          Five minutes. No commitment. Just a clear picture of where your project stands and what comes next.
        </p>
        <Link
          href="/project-pathfinder"
          className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-12 py-5 rounded-lg transition-all hover:shadow-xl hover:shadow-accent/25 text-[1.06rem]"
        >
          Get a Project Pathfinder →
        </Link>
      </div>
    </section>
  );
}
