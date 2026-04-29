import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BottomCTA from '@/components/BottomCTA';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { SchemaScript, breadcrumbSchema } from '@/lib/schema';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Preconstruction, general construction, design-build, construction management, and development advisory. Full-service commercial construction.',
};

const schema = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services' },
]);

export default function ServicesPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <Nav />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="px-6 md:px-10 py-20 md:py-28 max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <h1 className="font-sans text-[clamp(2.4rem,5vw,4rem)] font-bold text-black leading-tight tracking-tight mb-6">
              What We Build
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full-service commercial construction — from first conversation to ribbon cutting.
            </p>
          </ScrollReveal>
        </section>

        <SectionDivider />

        {/* Service Cards Grid */}
        <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 0.08}>
                <div className="border border-gray-200 rounded-xl p-8 h-full flex flex-col hover:border-purple-700/40 transition-colors">
                  <div className="h-[3px] w-8 bg-purple-700 mb-6" aria-hidden="true" />
                  <h2 className="text-xl font-bold text-black mb-2">{service.name}</h2>
                  <p className="text-sm font-semibold text-purple-700 mb-4 uppercase tracking-wide">
                    {service.tagline}
                  </p>
                  <p className="text-gray-600 text-[.92rem] leading-relaxed mb-6 flex-1">
                    {service.description.slice(0, 100)}
                    {service.description.length > 100 ? '…' : ''}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-semibold text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
