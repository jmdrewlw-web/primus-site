'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

export interface WorkWallImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface WorkWallProps {
  images: WorkWallImage[];
  className?: string;
}

/**
 * The work wall deliberately removes project and client labels. It is a visual
 * record of the range and craft of Primus work, not a categorized case-study
 * index. New SharePoint selections are added to the same manifest as they are
 * approved for web use.
 */
export default function WorkWall({ images, className = '' }: WorkWallProps) {
  const wallRef = useRef<HTMLDivElement>(null);
  const [columnCount, setColumnCount] = useState(1);

  useEffect(() => {
    const updateColumns = () => {
      setColumnCount(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };

    updateColumns();
    window.addEventListener('resize', updateColumns, { passive: true });
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  const columns = useMemo(() => {
    const next = Array.from({ length: columnCount }, () => [] as Array<{
      image: WorkWallImage;
      index: number;
    }>);
    const heights = Array.from({ length: columnCount }, () => 0);

    images.forEach((image, index) => {
      const shortestColumn = heights.indexOf(Math.min(...heights));
      next[shortestColumn].push({ image, index });
      heights[shortestColumn] += image.height / image.width;
    });

    return next;
  }, [columnCount, images]);

  useEffect(() => {
    const wall = wallRef.current;
    if (!wall) return;

    const items = Array.from(
      wall.querySelectorAll<HTMLElement>('[data-work-wall-item]')
    );
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((item) => {
        item.dataset.visible = 'true';
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = 'true';
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '80px 0px', threshold: 0.08 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [columnCount, images.length]);

  return (
    <div
      ref={wallRef}
      className={`grid items-start gap-4 ${className}`}
      style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
    >
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-4">
          {column.map(({ image, index }) => (
            <figure
              key={image.src}
              data-work-wall-item
              data-visible="false"
              className="group relative translate-y-5 overflow-hidden rounded-2xl bg-neutral-100 opacity-0 transition-[opacity,transform] duration-700 ease-out will-change-transform data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none"
              style={{
                transitionDelay: `${(index % 9) * 35}ms`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition duration-700 ease-out motion-safe:group-hover:scale-[1.025]"
                priority={index < 4}
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[.05]" />
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
