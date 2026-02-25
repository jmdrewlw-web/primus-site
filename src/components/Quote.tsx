"use client";
import { useReveal } from "@/hooks/useReveal";

export default function Quote() {
  const { ref, visible } = useReveal();

  return (
    <section ref={ref} className={`px-6 md:px-10 py-16 md:py-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
      <div className="max-w-[1280px] mx-auto bg-dark rounded-2xl p-10 md:p-16 relative overflow-hidden">
        {/* Watermark */}
        <span className="absolute top-6 left-10 font-display text-[8rem] text-white/[.04] leading-none select-none">&ldquo;</span>
        
        <div className="relative flex flex-col md:flex-row items-center gap-10">
          <img
            src="https://framerusercontent.com/images/3PoFGfLLuQ3GPKFclJPmGeMjg.jpg"
            alt="Jason Drewelow"
            className="w-24 h-24 rounded-full object-cover flex-shrink-0 border-2 border-white/10"
          />
          <div>
            <p className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] italic text-white/90 leading-relaxed mb-6">
              We build more than structures — we create the clarity that makes your project possible.
            </p>
            <div>
              <span className="text-white font-semibold text-sm">Jason Drewelow</span>
              <span className="text-white/40 text-sm ml-2">Principal & Owner, Primus Companies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
