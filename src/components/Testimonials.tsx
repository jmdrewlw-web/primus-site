'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getFeaturedTestimonials } from '@/lib/testimonials';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const testimonials = getFeaturedTestimonials(6);

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const current = testimonials[index];

  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  useEffect(() => {
    if (!paused) {
      startTimer();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, testimonials.length]);

  const goTo = (i: number) => {
    setIndex(i);
    startTimer();
  };

  if (!current) return null;

  return (
    <section
      aria-label="Client testimonials"
      className="px-6 py-20 md:py-28 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div
            className="text-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Quote mark */}
            <div
              className="text-6xl font-serif text-gold leading-none mb-6 select-none"
              aria-hidden="true"
            >
              &ldquo;
            </div>

            {/* Animated quote */}
            <div className="min-h-[8rem] flex items-center justify-center mb-8">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                  className="text-xl md:text-2xl text-gray-800 italic leading-relaxed"
                >
                  {current.quote}
                </motion.blockquote>
              </AnimatePresence>
            </div>

            {/* Author */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`author-${index}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <p className="font-bold text-black text-base">{current.author}</p>
                <p className="text-gray-500 text-sm mt-0.5">
                  {current.company}
                  {current.location ? ` · ${current.location}` : ''}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Navigation dots */}
            <div className="flex justify-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index
                      ? 'bg-gold w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
