'use client';
import { useRef, useEffect, useState } from 'react';
import { useInView, useSpring, useReducedMotion, useMotionValue } from 'framer-motion';

export function CountUp({
  end,
  suffix = '',
  prefix = '',
  className,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.5,
  });

  useEffect(() => {
    if (isInView) {
      if (prefersReducedMotion) {
        setDisplay(end);
      } else {
        motionValue.set(end);
      }
    }
  }, [isInView, end, prefersReducedMotion, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (v) => {
      setDisplay(Math.round(v));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span
      ref={ref}
      className={`font-[family-name:var(--font-mono)] ${className ?? ''}`}
    >
      {prefix}{display}{suffix}
    </span>
  );
}
