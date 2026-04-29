import Link from 'next/link';
import { services } from '@/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const SERVICE_ICONS: Record<string, string> = {
  preconstruction: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  'general-construction': 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
  'design-build': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'construction-management': 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  'development-advisory': 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
};

export default function ServicesStrip() {
  return (
    <section aria-label="Our services" className="px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              What We Do
            </h2>
            <Link
              href="/services"
              className="text-purple-700 font-semibold text-sm hover:underline"
            >
              View All Services →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.1}>
              <Link href={`/services/${service.slug}`} className="block group h-full">
                <div className="border border-gray-200 rounded-xl p-6 h-full flex flex-col hover:shadow-md hover:border-purple-700/30 transition-all duration-200">
                  <div className="w-10 h-10 rounded-lg bg-purple-700/10 flex items-center justify-center mb-4">
                    <svg
                      className="w-5 h-5 text-purple-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={SERVICE_ICONS[service.slug] ?? ''} />
                    </svg>
                  </div>
                  <div className="font-bold text-lg text-black mb-2 group-hover:text-purple-700 transition-colors">
                    {service.name}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                    {service.tagline}
                  </p>
                  <span className="text-purple-700 text-sm font-semibold self-start">
                    Learn More →
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
