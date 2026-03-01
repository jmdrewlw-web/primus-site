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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-cream/95 backdrop-blur-lg shadow-[0_1px_0_#E2DFD8]" 
        : "bg-cream"
    }`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 group">
          <img
            src="/images/Primus_Logo.jpeg"
            alt="Primus Companies"
            className="h-[36px] w-auto transition-opacity group-hover:opacity-80"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[.82rem] font-medium text-mid hover:text-dark transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/project-pathfinder"
            className="bg-accent hover:bg-accent-hover text-white text-[.82rem] font-semibold px-5 py-[9px] rounded-md transition-all hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-[1px]"
          >
            Request a Pathfinder →
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span className={`block w-5 h-[2px] bg-dark transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-dark transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-dark transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 pb-6 pt-2 space-y-4 border-t border-border">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-[.95rem] font-medium text-mid hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/project-pathfinder"
            className="block bg-accent text-white text-center font-semibold py-3 rounded-md text-[.92rem]"
          >
            Request a Pathfinder →
          </Link>
        </div>
      </div>
    </nav>
  );
}
