import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import TechnologyEdge from "@/components/TechnologyEdge";
import HowItWorks from "@/components/HowItWorks";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import Markets from "@/components/Markets";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <TechnologyEdge />
        <HowItWorks />
        <Projects />
        <Testimonials />
        <Quote />
        <Markets />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
