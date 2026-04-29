import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import { SectionDivider } from '@/components/ui/SectionDivider';
import ProblemSolution from '@/components/ProblemSolution';
import ServicesStrip from '@/components/ServicesStrip';
import FeaturedProjects from '@/components/FeaturedProjects';
import Testimonials from '@/components/Testimonials';
import BlogPreview from '@/components/BlogPreview';
import BottomCTA from '@/components/BottomCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav transparent />
      <main>
        <Hero />
        <SectionDivider />
        <ProblemSolution />
        <SectionDivider />
        <ServicesStrip />
        <SectionDivider />
        <FeaturedProjects />
        <SectionDivider />
        <Testimonials />
        <BlogPreview />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
