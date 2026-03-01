"use client";
import { useReveal } from "@/hooks/useReveal";

const PHOTOS = [
  { src: "/images/hero.jpg", tall: true },
  { src: "/images/project1.jpg", tall: false },
  { src: "/images/project2.jpg", tall: true },
  { src: "/images/project3.jpg", tall: false },
  { src: "/images/project4.jpg", tall: true },
  { src: "/images/project5.jpg", tall: false },
  { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop", tall: false },
  { src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&fit=crop", tall: true },
  { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fit=crop", tall: false },
  { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop", tall: true },
  { src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80&fit=crop", tall: false },
  { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop", tall: false },
];

export default function Projects() {
  const { ref, visible } = useReveal(0.05);

  return (
    <section id="projects" ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-12">
        <span className="text-[.72rem] font-semibold tracking-[.2em] uppercase text-accent block mb-4">
          Our Work
        </span>
        <div className="flex items-end justify-between">
          <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark leading-tight">
            See what we <em className="text-accent">build.</em>
          </h2>
          <div className="rule-accent hidden md:block" />
        </div>
      </div>

      <div
        className={`max-w-[1280px] mx-auto px-6 md:px-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {PHOTOS.map((p, i) => (
            <div key={i} className="mb-3 break-inside-avoid group cursor-pointer">
              <div className="rounded-lg overflow-hidden bg-cream-light">
                <img
                  src={p.src}
                  alt="Primus Companies project"
                  className="w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
