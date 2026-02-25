"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Projects", href: "#projects" },
  { label: "Field Notes", href: "/field-notes" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 border-b border-border shadow-sm"
          : "bg-cream border-b border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <img
            src="/images/Primus_Logo.jpeg"
            alt="Primus Companies"
            className="h-[38px] w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[.88rem] font-medium text-mid hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/project-pathfinder"
            className="bg-accent hover:bg-accent-hover text-white text-[.88rem] font-semibold px-6 py-[10px] rounded-lg transition-all hover:shadow-lg hover:shadow-accent/20"
          >
            Request a Pathfinder →
          </Link>
        </div>
      </div>
    </nav>
  );
}
