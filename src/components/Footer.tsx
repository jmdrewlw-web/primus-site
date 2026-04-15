import Link from 'next/link';
import Image from 'next/image';

const SERVICES = [
  { label: 'Preconstruction', href: '/services/preconstruction' },
  { label: 'General Construction', href: '/services/general-construction' },
  { label: 'Design-Build', href: '/services/design-build' },
  { label: 'Construction Management', href: '/services/construction-management' },
  { label: 'Development Advisory', href: '/services/development-advisory' },
];

const COMPANY = [
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
];

const OFFICES = [
  'Cedar Rapids (HQ)',
  'Nashville',
  'Omaha',
  'Minneapolis',
  'Kansas City',
];

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Logo */}
        <div className="mb-12">
          <div className="inline-block bg-white/95 rounded-lg px-3 py-2">
            <Image
              src="/images/logos/primus-logo.jpeg"
              alt="Primus Companies"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </div>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Column 1: Company */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">
              Company
            </h4>
            <div className="space-y-3">
              {COMPANY.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-white/50 hover:text-white transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">
              Services
            </h4>
            <div className="space-y-3">
              {SERVICES.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-white/50 hover:text-white transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">
              Resources
            </h4>
            <div className="space-y-3">
              <Link
                href="/field-notes"
                className="block text-white/50 hover:text-white transition-colors text-sm"
              >
                Blog (Field Notes)
              </Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white/80 font-semibold text-xs uppercase tracking-widest mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/50">
              <p>
                <a
                  href="mailto:connect@primus-companies.com"
                  className="hover:text-white transition-colors"
                >
                  connect@primus-companies.com
                </a>
              </p>
              <p>
                <a href="tel:+13193934831" className="hover:text-white transition-colors">
                  (319) 393-4831
                </a>
              </p>
              <p className="text-white/30 pt-1">
                401 8th Ave SE<br />
                Cedar Rapids, IA 52401
              </p>
            </div>
          </div>
        </div>

        {/* Office locations */}
        <div className="border-t border-white/[.07] pt-8 mb-6">
          <p className="text-white/30 text-xs text-center">
            {OFFICES.join(' · ')}
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © 2026 Primus Companies. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/25 hover:text-white/40 text-xs transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-white/25 hover:text-white/40 text-xs transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
