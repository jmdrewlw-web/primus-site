import type { Metadata } from 'next';
import { Suspense } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { SchemaScript, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Start your commercial construction project with Primus Companies. Get a free Pathfinder assessment — budget, timeline, and clear next steps.',
};

export default function ContactPage() {
  const schema = breadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  return (
    <>
      <SchemaScript schema={schema} />
      <Nav />
      <main className="pt-20">
        {/* Hero banner */}
        <section className="bg-gray-50 border-b border-gray-200 py-14 md:py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700 mb-3">
              Get in Touch
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
              Start the Conversation
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              Tell us about your project and we&apos;ll connect you with the right team. First response within one business day.
            </p>
          </div>
        </section>

        {/* Two-column layout */}
        <section className="max-w-[1200px] mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">

            {/* Left: Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <Suspense fallback={<div className="h-96 bg-gray-50 rounded-xl animate-pulse" />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right: Contact info */}
            <div className="space-y-6">
              {/* Contact card */}
              <div className="rounded-xl border border-gray-200 bg-white p-7 space-y-5">
                <h2 className="text-lg font-bold text-gray-800">Contact Information</h2>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-purple-700 flex-shrink-0">
                      {/* Email icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="2" y="4" width="20" height="16" rx="2"/>
                        <path d="M2 7l10 7 10-7"/>
                      </svg>
                    </span>
                    <div>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-0.5">Email</p>
                      <a
                        href="mailto:connect@primus-companies.com"
                        className="text-gray-800 hover:text-purple-700 transition-colors font-medium"
                      >
                        connect@primus-companies.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 text-purple-700 flex-shrink-0">
                      {/* Phone icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.59 1.3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2z"/>
                      </svg>
                    </span>
                    <div>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-0.5">Phone</p>
                      <a
                        href="tel:+13193934831"
                        className="text-gray-800 hover:text-purple-700 transition-colors font-medium"
                      >
                        (319) 393-4831
                      </a>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pathfinder CTA strip */}
        <section className="bg-gray-50 border-t border-gray-200 py-12">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-purple-700 mb-2">
              Not sure where to start?
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Try the Project Pathfinder
            </h2>
            <p className="text-gray-600 max-w-lg mx-auto mb-6 text-sm">
              Our free Pathfinder assessment gives you a budget range, realistic timeline, and clear next steps — before you commit to anything.
            </p>
            <a
              href="/contact?ref=pathfinder"
              className="inline-block rounded-lg px-6 py-3 bg-gold text-black font-semibold text-sm hover:bg-gold-light transition-colors"
            >
              Start Pathfinder Assessment
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
