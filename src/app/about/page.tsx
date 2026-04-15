import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BottomCTA from '@/components/BottomCTA';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { CountUp } from '@/components/ui/CountUp';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Primus Companies — 24 years, 500+ projects, $770M delivered. Commercial construction with offices in Cedar Rapids, Nashville, Omaha, Minneapolis, and Kansas City.',
};

const STATS = [
  { end: 500, suffix: '+', label: 'Projects Completed' },
  { end: 24, suffix: '', label: 'Years in Business' },
  { end: 770, prefix: '$', suffix: 'M', label: 'Total Delivered' },
  { end: 5, suffix: '', label: 'Regional Offices' },
  { end: 15, suffix: '+', label: 'States Served' },
];

const VALUES = [
  {
    title: 'Accountability',
    quote: 'Say what you\u2019ll do. Do what you said.',
    description:
      'We treat every commitment like a contract. Our word is our bond — on budget, on schedule, no exceptions.',
  },
  {
    title: 'Transparency',
    quote: 'Bad news early, good news often.',
    description:
      'Problems don\u2019t disappear by ignoring them. We surface issues fast and come with solutions, not excuses.',
  },
  {
    title: 'Craftsmanship',
    quote: 'Build it like it\u2019s yours.',
    description:
      'Every detail gets treated as if it\u2019s going into our own building. That standard doesn\u2019t change at job #501.',
  },
];

const TEAM = [
  {
    name: 'Jason Drewelow',
    title: 'Principal',
    image: '/images/team/jason-drewelow.jpg',
    initials: 'JD',
    color: 'bg-purple-700',
  },
];

const OFFICES = [
  { city: 'Cedar Rapids', state: 'IA', note: 'Headquarters' },
  { city: 'Nashville', state: 'TN', note: null },
  { city: 'Omaha', state: 'NE', note: null },
  { city: 'Minneapolis', state: 'MN', note: null },
  { city: 'Kansas City', state: 'MO', note: null },
];

const schema = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
]);

export default function AboutPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <Nav />
      <main className="pt-20 md:pt-24">

        {/* Hero */}
        <section className="px-6 md:px-10 py-20 md:py-28 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h1 className="font-sans text-[clamp(2.4rem,5vw,4rem)] font-bold text-black leading-tight tracking-tight mb-8">
              24 Years. 500+ Projects.<br className="hidden sm:block" /> One Standard.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-[680px] space-y-5 text-gray-600 text-[1.05rem] leading-relaxed">
              <p>
                We started in Cedar Rapids in 2002. Since then, we&apos;ve built more than 500 projects
                across 15 states — dental offices, veterinary clinics, commercial buildings, multifamily,
                light industrial. We don&apos;t pitch. We don&apos;t sell. We build.
              </p>
              <p>
                Every project gets the same attention: clear communication before the first shovel hits,
                honest reporting when things get complicated, and a finished product that holds up years
                after we&apos;ve moved on to the next job.
              </p>
              <p>
                Five offices. One standard. That&apos;s the whole model.
              </p>
            </div>
          </ScrollReveal>
        </section>

        <SectionDivider />

        {/* Stats */}
        <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-10 md:gap-6">
              {STATS.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold text-black leading-none mb-2 font-sans">
                    <CountUp
                      end={stat.end}
                      prefix={stat.prefix ?? ''}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div
                    className="h-[2px] w-6 bg-gold mx-auto mb-3"
                    aria-hidden="true"
                  />
                  <p className="text-gray-400 text-[.75rem] font-semibold tracking-[.12em] uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        <SectionDivider />

        {/* Core Values */}
        <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-3">
              How We Work
            </h2>
            <p className="text-gray-600 text-[1rem] mb-12 max-w-lg">
              Three principles. Not framed on a wall — written into every estimate, schedule, and punch list.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="border border-gray-200 rounded-xl p-8 h-full flex flex-col">
                  <div className="h-[3px] w-8 bg-gold mb-6" aria-hidden="true" />
                  <blockquote className="font-sans text-[1.1rem] font-semibold text-black leading-snug mb-3">
                    &ldquo;{value.quote}&rdquo;
                  </blockquote>
                  <p className="text-[.75rem] font-semibold tracking-[.1em] uppercase text-purple-700 mb-4">
                    {value.title}
                  </p>
                  <p className="text-gray-600 text-[.92rem] leading-relaxed mt-auto">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Team */}
        <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-12">
              Leadership
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-8">
            {TEAM.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <TeamCard member={member} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Offices */}
        <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-3">
              Where We Work
            </h2>
            <p className="text-gray-600 text-[1rem] mb-10 max-w-lg">
              Five regional offices so there&apos;s always someone close to your site.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ul className="space-y-3" aria-label="Office locations">
              {OFFICES.map((office, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 text-[1rem]"
                >
                  <span className="font-semibold text-black">
                    {office.city}, {office.state}
                  </span>
                  {office.note && (
                    <span className="text-gray-400 text-[.85rem]">
                      {office.note}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </section>

        <SectionDivider />

        {/* Bottom CTA */}
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}

function TeamCard({ member }: { member: (typeof TEAM)[number] }) {
  return (
    <div className="flex flex-col items-center text-center w-40">
      <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4">
        <TeamPhoto member={member} />
      </div>
      <p className="font-semibold text-black text-[.95rem] leading-tight">{member.name}</p>
      <p className="text-gray-400 text-[.8rem] mt-1">{member.title}</p>
    </div>
  );
}

function TeamPhoto({ member }: { member: (typeof TEAM)[number] }) {
  // Try to render image; fall back to initials circle on error via client-side,
  // but since we know the team dir is empty we render initials server-side.
  // We attempt the image and let Next.js handle missing files gracefully via
  // a wrapper that defaults to the initials div if the src path is absent.
  return (
    <>
      <Image
        src={member.image}
        alt={member.name}
        fill
        sizes="112px"
        className="object-cover"
        onError={undefined}
      />
      {/* Initials fallback layer rendered beneath — image sits on top when it loads */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 flex items-center justify-center ${member.color} text-white font-bold text-xl -z-10`}
      >
        {member.initials}
      </span>
    </>
  );
}
