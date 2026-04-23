'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { CountUp } from '@/components/ui/CountUp';

const HEADLINE_WORDS = ['We', 'navigate', 'the', 'build.', 'You', 'focus', 'on', 'the', 'business.'];

const STATS = [
  { prefix: '', end: 500, suffix: '+', label: 'Projects' },
  { prefix: '', end: 24, suffix: '', label: 'Years' },
  { prefix: '$', end: 770, suffix: 'M', label: 'Delivered' },
  { prefix: '', end: 5, suffix: '', label: 'Offices' },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      aria-label="Hero"
      className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/main.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      <div className="max-w-4xl mx-auto text-center py-24 md:py-32">
        {/* Headline — staggered word reveal */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          {HEADLINE_WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="inline-block mr-[0.25em]"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          500+ projects delivered with fixed pricing and one point of contact.
          Design-build, construction management, and development advisory.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.75, ease: 'easeOut' }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <MagneticButton href="/contact?ref=pathfinder" variant="gold">
            Start a Conversation
          </MagneticButton>
          <MagneticButton href="/projects" variant="outline-light">
            See Our Work
          </MagneticButton>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.9, ease: 'easeOut' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/20 pt-10"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-white mb-1 font-mono">
                <CountUp
                  end={stat.end}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
