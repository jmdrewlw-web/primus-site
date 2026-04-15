import Link from 'next/link';
import { services } from '@/data/services';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ServicesStrip() {
  return (
    <section aria-label="Our services" className="px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12 tracking-tight">
            What We Do
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.1}>
              <div className="border border-gray-200 rounded-xl p-6 h-full flex flex-col hover:shadow-md hover:border-purple-700/30 transition-all duration-200">
                <div className="font-bold text-lg text-black mb-2">
                  {service.name}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                  {service.tagline}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-purple-700 text-sm font-semibold hover:underline self-start"
                >
                  Learn More →
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
