import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BottomCTA from '@/components/BottomCTA';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Primus Companies — commercial construction built on disciplined coordination, accountability, and a Cedar Rapids foundation dating to 1973.',
};

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
      'Every detail gets treated as if it\u2019s going into our own building. That standard does not change from one project to the next.',
  },
];

const TEAM = [
  {
    name: 'Jason Drewelow',
    title: 'Principal',
    initials: 'JD',
    color: 'bg-purple-700',
  },
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
              Commercial construction,<br className="hidden sm:block" /> built on experience since 1973.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-[680px] space-y-5 text-gray-600 text-[1.05rem] leading-relaxed">
              <p>
                Primus started in Cedar Rapids in 1973. Since then, we&apos;ve built for owners with serious
                plans and real operating needs. We don&apos;t pitch. We don&apos;t sell. We build.
              </p>
              <p>
                Every project gets the same attention: clear communication before the first shovel hits,
                honest reporting when things get complicated, and a finished product that holds up years
                after we&apos;ve moved on to the next job.
              </p>
              <p>Our model is simple: disciplined coordination, direct accountability, and work that holds up.</p>
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

        {/* Reach */}
        <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-3">
              Built to travel well
            </h2>
            <p className="text-gray-600 text-[1rem] mb-10 max-w-lg">
              From a Cedar Rapids foundation, Primus brings commercial construction experience to owners across the Midwest and beyond.
            </p>
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
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-0 flex items-center justify-center ${member.color} text-white font-bold text-xl`}
    >
      {member.initials}
    </span>
  );
}
