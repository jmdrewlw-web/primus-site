"use client";
import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const PROJECTS = [
  { name: "Crystal Group HQ", loc: "Hiawatha, Iowa", type: "Light Industrial", img: "https://framerusercontent.com/images/lHkMHRR59Ok4KHMo6gT31kV1ZY.jpg" },
  { name: "Madison Veterinary Hospital", loc: "Madison, Wisconsin", type: "Healthcare", img: "https://framerusercontent.com/images/hJ3Ggwq9LFUQ6cEPU4k6apvhKc.jpg" },
  { name: "Titus Dentistry", loc: "Cedar Rapids, Iowa", type: "Healthcare", img: "https://framerusercontent.com/images/JwYQFGBScFmAfyW1UJ9Vj2rQ.jpg" },
  { name: "Timberline Manufacturing", loc: "Woodbine, Iowa", type: "Light Industrial", img: "https://framerusercontent.com/images/4wNIqNMXlYxaCAZZQKAf0bUhsg.jpg" },
  { name: "Ducharme Dermatology", loc: "Quad Cities", type: "Healthcare", img: "https://framerusercontent.com/images/gBqbCCEyH6kfaFnAMvHO6VYvyI.jpg" },
  { name: "Bluegrass Veterinary", loc: "Gallatin, Tennessee", type: "Healthcare", img: "https://framerusercontent.com/images/6K4GYgI7GpHqJNGsW83MdKZCfA.jpg" },
  { name: "Integrative Health", loc: "Cedar Rapids, Iowa", type: "Healthcare", img: "https://framerusercontent.com/images/6zVCkLkOmlxQYnZeMHvPDh0XcU.jpg" },
  { name: "Cedar Rapids Endodontics", loc: "Cedar Rapids, Iowa", type: "Healthcare", img: "https://framerusercontent.com/images/qcNhAhiXP5GdcpAPRcLwDVnXKE.jpg" },
];

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: sectionRef, visible } = useReveal(0.1);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-10">
        <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-4">
          Selected Work
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark leading-tight">
          Projects that speak<br />
          <em className="text-accent">for themselves.</em>
        </h2>
      </div>

      <div
        ref={scrollRef}
        className={`flex gap-6 overflow-x-auto px-6 md:px-10 pb-6 snap-x snap-mandatory scrollbar-hide transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {PROJECTS.map((p, i) => (
          <div
            key={i}
            className={`flex-shrink-0 snap-start group cursor-pointer ${
              i === 0 ? "w-[560px]" : "w-[400px]"
            }`}
          >
            <div className={`relative rounded-xl overflow-hidden bg-cream-light ${
              i === 0 ? "h-[420px]" : "h-[360px]"
            }`}>
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-[.7rem] font-semibold tracking-[.12em] uppercase text-white/70 block mb-1">
                  {p.type}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-0.5">{p.name}</h3>
                <p className="text-white/60 text-sm">{p.loc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
