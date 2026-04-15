import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

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
              View All Projects →
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.08}>
              <Link href={`/projects/${project.slug}`} className="block group">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <Image
                    src={`${project.photoDir}/cover.jpg`}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <p className="text-white font-bold text-base leading-tight">
                      {project.name}
                    </p>
                    {project.location && (
                      <p className="text-white/70 text-sm mt-0.5">{project.location}</p>
                    )}
                    <p className="text-gold text-xs font-semibold uppercase tracking-widest mt-1">
                      {project.type}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link
              href="/projects"
              className="text-purple-700 font-semibold text-sm hover:underline"
            >
              View All Projects →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
