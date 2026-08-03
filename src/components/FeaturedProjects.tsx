import Link from 'next/link';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import WorkWall from '@/components/WorkWall';
import { workWallImages } from '@/data/work-wall';

export default function FeaturedProjects() {
  return (
    <section aria-label="Featured projects" className="px-6 py-20 md:py-28">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
              Our Work
            </h2>
            <Link
              href="/projects"
              className="text-purple-700 font-semibold text-sm hover:underline"
            >
              Explore the work →
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <WorkWall images={workWallImages.slice(0, 9)} />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="text-purple-700 font-semibold text-sm hover:underline"
            >
              Explore the work →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
