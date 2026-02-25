"use client";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Projects", href: "#projects" },
  { label: "Field Notes", href: "/field-notes" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "/careers" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white/60">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand */}
          <div>
            <div className="inline-block bg-white rounded-lg p-3 mb-6">
              <Image
                src="/images/Primus_Logo.jpeg"
                alt="Primus Companies"
                width={130}
                height={34}
                className="h-[34px] w-auto"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Commercial general contractor and development partner. Clarify. Plan. Build. Deliver.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Navigate</h4>
            <div className="space-y-3">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="block text-white/50 hover:text-white transition-colors text-sm"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <div className="space-y-3 text-sm">
              <p>(319) 393-4831</p>
              <p>connect@primus-companies.com</p>
              <p className="text-white/40">
                4350 River Ridge Dr NE<br />
                Cedar Rapids, IA 52402
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[.08] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Primus Companies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/30 hover:text-white/50 text-xs transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/50 text-xs transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
