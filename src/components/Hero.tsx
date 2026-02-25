"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setReady(true); }, []);

  return (
    <section className="relative px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-32 max-w-[1280px] mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div>
          <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-6">
            Clarify · Plan · Build · Deliver
          </span>

          <h1 className="font-display text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.04] font-bold text-dark mb-4 tracking-tight">
            <span
              className="hero-word"
              style={{ animationDelay: "0.2s" }}
            >
              You&apos;ve got a vision.
            </span>
          </h1>

          <p
            className={`font-display text-[clamp(1.4rem,3vw,2rem)] leading-[1.5] italic text-accent mb-7 pb-1 transition-all duration-600 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "0.55s" }}
          >
            You deserve a builder who gets it.
          </p>

          <p className="text-[1.12rem] text-mid leading-relaxed max-w-[520px] mb-3.5">
            You bring the vision — wherever you are in the process. We bring the plan, the team, and the build. Whether you&apos;re still picking a site or you&apos;ve got drawings ready to price, we meet you where you are and get you to the finish line.
          </p>
          <p className="text-base text-light leading-relaxed max-w-[520px] mb-10">
            Construction will never be a straight line. But the right team makes the bumps a lot smaller. Fifty years, a thousand projects — we know where the problems hide.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/project-pathfinder"
              className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/25 text-[.95rem]"
            >
              Request My Project Pathfinder →
            </Link>
            <Link
              href="#projects"
              className="border-2 border-dark/15 text-dark font-semibold px-8 py-4 rounded-lg hover:border-dark/30 transition-all text-[.95rem]"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative hidden md:block">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-cream-light">
            <img
              src="https://framerusercontent.com/images/SSzFMXoyvOFnlQrhmBbYiScjnc.jpg"
              alt="Primus Companies — commercial construction project"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl shadow-dark/8 px-6 py-5 flex gap-8">
            {[
              { label: "Founded", value: "1972" },
              { label: "Projects", value: "1,000+" },
              { label: "Offices", value: "4" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-xl font-bold text-dark">{s.value}</div>
                <div className="text-xs text-light font-medium tracking-wide uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
