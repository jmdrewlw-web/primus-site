import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { breadcrumbSchema, creativeWorkSchema, SchemaScript } from '@/lib/schema';
import { projects } from '@/data/projects';
import { caseStudies } from '@/data/case-studies';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore 500+ completed commercial construction projects — dental, veterinary, medical, commercial, and industrial across 15+ states.',
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
]);

const caseStudySchemas = caseStudies.map((cs) =>
  creativeWorkSchema({
    name: cs.name,
    description: cs.description,
    location: cs.location,
    type: cs.type,
  })
);

export default function ProjectsPage() {
  return (
    <>
      <SchemaScript schema={breadcrumb} />
      <SchemaScript schema={caseStudySchemas} />
      <Nav />
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="px-6 md:px-10 py-20 md:py-28 max-w-[1200px] mx-auto">
          <ScrollReveal>
            <h1 className="font-sans text-[clamp(2.4rem,5vw,4rem)] font-bold text-black leading-tight tracking-tight mb-6">
              Our Work
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 text-[1.1rem] max-w-xl">
              500+ projects across 15 states. Here are some of our favorites.
            </p>
          </ScrollReveal>
        </section>

        {/* Filterable grid + detail panel */}
        <section className="px-6 md:px-10 pb-24 max-w-[1200px] mx-auto">
          <ProjectsClient projects={projects} caseStudies={caseStudies} />
        </section>
      </main>
      <Footer />
    </>
  );
}
