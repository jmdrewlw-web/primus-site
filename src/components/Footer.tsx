"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white/60">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <div className="inline-block bg-white/95 rounded-lg px-3 py-2 mb-6">
              <img
                alt="Primus Companies"
                src="/images/Primus_Logo.jpeg"
                className="h-[28px] w-auto"
              />
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Commercial general contractor and development partner. Plan. Build. Develop. Grow.
            </p>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-[.72rem] uppercase tracking-[.16em] mb-5">Navigate</h4>
            <div className="space-y-2.5">
              {[
                ["About", "/about"],
                ["How We Work", "/how-we-work"],
                ["Projects", "#projects"],
                ["Field Notes", "/field-notes"],
                ["Contact", "#contact"],
                ["Careers", "/careers"],
              ].map(([label, href]) => (
                <Link key={label} href={href} className="block text-white/40 hover:text-white transition-colors text-sm">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/80 font-semibold text-[.72rem] uppercase tracking-[.16em] mb-5">Contact</h4>
            <div className="space-y-2.5 text-sm">
              <p className="text-white/50">(319) 393-4831</p>
              <p className="text-white/50">connect@primus-companies.com</p>
              <p className="text-white/30 mt-4">
                4350 River Ridge Dr NE<br />Cedar Rapids, IA 52402
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[.06] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">© {new Date().getFullYear()} Primus Companies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/25 hover:text-white/40 text-xs transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/25 hover:text-white/40 text-xs transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
