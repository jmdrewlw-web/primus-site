import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { breadcrumbSchema, SchemaScript } from '@/lib/schema';
import WorkWall from '@/components/WorkWall';
import { workWallImages } from '@/data/work-wall';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A visual record of Primus commercial construction work across the Midwest and beyond.',
};

const breadcrumb = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Projects', url: '/projects' },
]);

export default function ProjectsPage() {
  return (
    <>
      <SchemaScript schema={breadcrumb} />
      <Nav />
      <main className="pt-20 md:pt-24">
        <section className="px-6 md:px-10 pt-20 pb-12 md:pt-28 md:pb-16 max-w-[1440px] mx-auto">
          <ScrollReveal>
            <h1 className="font-sans text-[clamp(2.4rem,5vw,4rem)] font-bold text-black leading-tight tracking-tight mb-6">
              Our Work
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-gray-500 text-[1.1rem] max-w-2xl">
              A living visual record of the places we have helped bring to life.
            </p>
          </ScrollReveal>
        </section>

        <section className="px-4 sm:px-6 md:px-10 pb-24 max-w-[1440px] mx-auto">
          <WorkWall images={workWallImages} />
        </section>
      </main>
      <Footer />
    </>
  );
}
