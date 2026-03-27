"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 100); }, []);

  return (
    <>
      <section aria-label="Hero" className="relative min-h-[85vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          role="img"
          aria-label="Primus Companies commercial construction project"
          style={{ backgroundImage: "url('/images/hero.jpg')", filter: "brightness(0.4)" }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/40 to-transparent" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-10 pb-16 md:pb-24 w-full">
          <span
            className={`text-[.72rem] font-semibold tracking-[.2em] uppercase text-accent block mb-7 flex items-center gap-4 transition-all duration-700 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <span className="w-8 h-[1px] bg-accent" />
            Clarify · Plan · Build · Deliver
          </span>

          <h1
            className={`font-display text-[clamp(2.8rem,6.5vw,5rem)] leading-[0.98] font-bold text-white mb-4 tracking-[-0.02em] max-w-2xl transition-all duration-700 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ transitionDelay: "0.25s" }}
          >
            You&apos;ve got<br />a vision.
          </h1>

          <p
            className={`font-display text-[clamp(1.2rem,2.5vw,1.7rem)] leading-[1.4] italic text-accent mb-8 transition-all duration-700 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.5s" }}
          >
            You deserve a builder who gets it.
          </p>

          <p
            className={`text-[1rem] text-white/60 leading-[1.75] max-w-xl mb-10 transition-all duration-700 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.65s" }}
          >
            You bring the vision — wherever you are in the process. We bring the plan, the team, and the build. Whether you&apos;re still picking a site or you&apos;ve got drawings ready to price, we meet you where you are and get you to the finish line.
          </p>

          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 ${ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: "0.8s" }}
          >
            <Link
              href="/project-pathfinder"
              className="bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-3.5 rounded-md transition-all hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-[2px] text-[.92rem]"
            >
              Request My Project Pathfinder →
            </Link>
            <Link
              href="#projects"
              className="border border-white/20 text-white font-semibold px-7 py-3.5 rounded-md hover:border-white/40 hover:bg-white/5 transition-all text-[.92rem]"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-white border-b-[3px] border-accent">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "24", label: "Years in Business" },
            { value: "5", label: "Regional Offices" },
            { value: "$770M", label: "In Delivered Projects" },
          ].map((s) => (
            <div key={s.label} className="text-center md:border-r last:border-r-0 border-border/50 py-2">
              <div className="font-display text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-dark leading-none mb-1">{s.value}</div>
              <div className="text-[.65rem] font-semibold tracking-[.12em] uppercase text-light">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
