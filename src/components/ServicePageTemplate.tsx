'use client';
import { useState } from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { SectionDivider } from '@/components/ui/SectionDivider';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { getCaseStudiesBySlugs } from '@/lib/case-studies';
import type { ServiceData } from '@/data/services';

export default function ServicePageTemplate({ service }: { service: ServiceData }) {
  const caseStudies =
    service.relatedCaseStudySlugs.length > 0
      ? getCaseStudiesBySlugs(service.relatedCaseStudySlugs)
      : [];

  return (
    <main className="pt-20 md:pt-24">
      {/* 1. Hero */}
      <section className="px-6 md:px-10 py-20 md:py-28 max-w-[1200px] mx-auto text-center">
        <ScrollReveal>
          <h1 className="font-sans text-[clamp(2.4rem,5vw,4rem)] font-bold text-black leading-tight tracking-tight mb-4">
            {service.name}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{service.tagline}</p>
        </ScrollReveal>
      </section>

      <SectionDivider />

      {/* 2. What You Get */}
      <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-3">
            What You Get
          </h2>
          <p className="text-gray-600 text-[1rem] mb-12 max-w-lg">{service.description}</p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {service.features.map((feature, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="border-t-[3px] border-purple-700 bg-gray-50 rounded-b-xl p-8 h-full">
                <h3 className="font-bold text-black text-[1rem] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-[.92rem] leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* 3. Our Process */}
      <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-12">
            Our Process
          </h2>
        </ScrollReveal>
        <div className="space-y-12 max-w-2xl">
          {service.process.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="flex gap-6 items-start">
                <span
                  className="text-5xl font-bold text-purple-700/20 font-mono leading-none flex-shrink-0 w-14 text-right"
                  aria-hidden="true"
                >
                  {String(step.step).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-bold text-black text-[1.05rem] mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-[.92rem] leading-relaxed">{step.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* 4. Who It's For */}
      <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-6">
            Who It&apos;s For
          </h2>
          <div className="border border-gray-200 rounded-xl p-8 max-w-2xl">
            <p className="text-gray-600 text-[1rem] leading-relaxed">{service.whoItsFor}</p>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. Case Studies (conditional) */}
      {caseStudies.length > 0 && (
        <>
          <SectionDivider />
          <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
            <ScrollReveal>
              <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-12">
                Projects
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((cs, i) => (
                <ScrollReveal key={cs.slug} delay={i * 0.08}>
                  <div className="border border-gray-200 rounded-xl p-8 h-full flex flex-col">
                    <h3 className="font-bold text-black text-[1rem] mb-1">{cs.name}</h3>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">
                      {cs.client} · {cs.location}
                    </p>
                    <p className="text-sm font-semibold text-purple-700 mb-4">{cs.result}</p>
                    {cs.quote && (
                      <blockquote className="mt-auto border-l-2 border-gray-200 pl-4 text-[.88rem] text-gray-600 italic leading-relaxed">
                        &ldquo;{cs.quote}&rdquo;
                      </blockquote>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </>
      )}

      <SectionDivider />

      {/* 6. FAQ */}
      <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-12">
            Common Questions
          </h2>
        </ScrollReveal>
        <div className="max-w-2xl space-y-2">
          {service.faq.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FAQItem question={item.question} answer={item.answer} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* 7. CTA */}
      <section className="px-6 md:px-10 py-20 max-w-[1200px] mx-auto text-center">
        <ScrollReveal>
          <h2 className="font-sans text-[clamp(1.6rem,3vw,2.2rem)] font-bold text-black mb-4">
            Ready to get started?
          </h2>
          <p className="text-gray-600 text-[1rem] mb-8 max-w-md mx-auto">
            Tell us about your project. We&apos;ll give you a straight answer.
          </p>
          <MagneticButton href="/contact?ref=pathfinder" variant="gold">
            Start a Conversation
          </MagneticButton>
        </ScrollReveal>
      </section>
    </main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-lg text-black pr-4">{question}</span>
        <span
          className={`flex-shrink-0 text-purple-700 text-xl transition-transform duration-200 ${
            open ? 'rotate-45' : ''
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-[.95rem] leading-relaxed border-t border-gray-100">
          <p className="pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}
