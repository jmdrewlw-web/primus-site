"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { setTimeout(() => setReady(true), 100); }, []);

  return (
    <section className="relative px-6 md:px-10 pt-12 md:pt-20 pb-20 md:pb-32 max-w-[1280px] mx-auto overflow-hidden">
      {/* Decorative accent line */}
      <div className="absolute top-0 left-[10%] w-[2px] h-[60%] bg-gradient-to-b from-accent/20 via-accent/5 to-transparent hidden md:block" />
      
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-20 items-center">
        <div className="relative">
          {/* Tagline */}
          <span 
            className={`text-[.72rem] font-semibold tracking-[.2em] uppercase text-accent block mb-8 transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '0.1s' }}
          >
            Clarify · Plan · Build · Deliver
          </span>

          {/* Headline */}
          <h1 className="font-display text-[clamp(2.8rem,6.5vw,4.8rem)] leading-[0.98] font-bold text-dark mb-5 tracking-[-0.02em]">
            <span className="hero-word" style={{ animationDelay: "0.2s" }}>
              You&apos;ve got
            </span>
            <br />
            <span className="hero-word" style={{ animationDelay: "0.35s" }}>
              a vision.
            </span>
          </h1>

          {/* Kicker */}
          <p
            className={`font-display text-[clamp(1.3rem,2.8vw,1.9rem)] leading-[1.4] italic text-accent mb-8 transition-all duration-700 ${
              ready ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "0.6s" }}
          >
            You deserve a builder who gets it.
          </p>

          {/* Accent rule */}
          <div className={`rule-accent mb-8 transition-all duration-500 ${ready ? 'opacity-100 w-12' : 'opacity-0 w-0'}`} style={{ transitionDelay: '0.7s' }} />

          {/* Body copy */}
          <div className={`transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.75s' }}>
            <p className="text-[1.05rem] text-mid leading-[1.75] max-w-[500px] mb-3">
              You bring the vision — wherever you are in the process. We bring the plan, the team, and the build. Whether you&apos;re still picking a site or you&apos;ve got drawings ready to price, we meet you where you are and get you to the finish line.
            </p>
            <p className="text-[.92rem] text-light leading-[1.7] max-w-[500px] mb-10">
              Construction will never be a straight line. But the right team makes the bumps a lot smaller. Fifty years, a thousand projects — we know where the problems hide.
            </p>
          </div>

          {/* CTAs */}
          <div className={`flex flex-wrap gap-4 transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '0.9s' }}>
            <Link
              href="/project-pathfinder"
              className="bg-accent hover:bg-accent-hover text-white font-semibold px-7 py-3.5 rounded-md transition-all hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-[2px] text-[.92rem]"
            >
              Request My Project Pathfinder →
            </Link>
            <Link
              href="#projects"
              className="border border-dark/15 text-dark font-semibold px-7 py-3.5 rounded-md hover:border-dark/30 hover:bg-dark/[.03] transition-all text-[.92rem]"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Hero image column */}
        <div className={`relative hidden md:block transition-all duration-1000 ${ready ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-[0.97]'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-cream-light shadow-2xl shadow-dark/10">
            <img
              src="https://primus-companies.com/wp-content/uploads/2021/07/DSC_0604-scaled.jpg"
              alt="Primus Companies — commercial construction project"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Floating stat card */}
          <div 
            className={`absolute -bottom-6 -left-8 bg-white rounded-xl shadow-2xl shadow-dark/10 px-5 py-4 flex gap-7 transition-all duration-700 ${ready ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '1.1s', animation: ready ? 'float 6s ease-in-out infinite 2s' : 'none' }}
          >
            {[
              { label: "Founded", value: "1972" },
              { label: "Projects", value: "1,000+" },
              { label: "Offices", value: "4" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-lg font-bold text-dark">{s.value}</div>
                <div className="text-[.65rem] text-light font-semibold tracking-[.1em] uppercase">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Decorative corner accent */}
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-accent/15 rounded-tr-2xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
