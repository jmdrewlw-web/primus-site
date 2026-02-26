"use client";
import { useReveal } from "@/hooks/useReveal";

const PHOTOS = [
  "https://primus-companies.com/wp-content/uploads/2021/07/DSC_0604-scaled.jpg",
  "https://primus-companies.com/wp-content/uploads/2021/07/Primus-Stock-4-min-scaled.jpg",
  "https://primus-companies.com/wp-content/uploads/2021/07/Primus-Stock-7-P-min-scaled.jpg",
  "https://primus-companies.com/wp-content/uploads/2021/07/Primus-Stock-8-P-min-scaled.jpg",
  "https://primus-companies.com/wp-content/uploads/2021/07/IMG_4652.jpg",
  "https://primus-companies.com/wp-content/uploads/2021/07/image0-9.jpeg",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
  "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
];

export default function Projects() {
  const { ref, visible } = useReveal(0.05);

  return (
    <section id="projects" ref={ref} className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-10">
        <span className="text-[.76rem] font-semibold tracking-[.16em] uppercase text-accent block mb-4">
          Our Work
        </span>
        <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-dark leading-tight">
          See what we <em className="text-accent">build.</em>
        </h2>
      </div>

      <div
        className={`max-w-[1280px] mx-auto px-6 md:px-10 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {PHOTOS.map((src, i) => (
            <div key={i} className="mb-3 break-inside-avoid group cursor-pointer">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={src}
                  alt="Primus Companies project"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-light text-sm mt-8">
          1,000+ projects delivered across 15 states. <span className="text-accent font-medium cursor-pointer hover:underline">Upload your photos coming soon.</span>
        </p>
      </div>
    </section>
  );
}
