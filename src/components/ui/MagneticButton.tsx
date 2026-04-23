'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';

type Variant = 'gold' | 'outline' | 'outline-light';

const variantClasses: Record<Variant, string> = {
  gold: 'bg-gold text-black hover:bg-gold-light',
  outline: 'border border-gray-200 text-gray-800 hover:border-purple-700 hover:text-purple-700',
  'outline-light': 'border border-white/40 text-white hover:border-white hover:bg-white/10',
};

const baseClasses =
  'rounded-lg px-6 py-3 font-semibold text-sm transition-colors inline-block';

export function MagneticButton({
  children,
  className,
  href,
  variant = 'gold',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const maxShift = 4;
    setOffset({
      x: Math.max(-maxShift, Math.min(maxShift, dx * 0.2)),
      y: Math.max(-maxShift, Math.min(maxShift, dy * 0.2)),
    });
  };

  const handleMouseLeave = () => setOffset({ x: 0, y: 0 });

  const style = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: 'transform 0.15s ease-out',
  };

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${className ?? ''}`;

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={combinedClassName}
        style={style}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={combinedClassName}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
