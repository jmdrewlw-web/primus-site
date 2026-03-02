import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
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
      <Hero />
      <ProblemSolution />
      <Services />
      <HowItWorks />
      <Projects />
      <Testimonials />
      <Quote />
      <Markets />
      <FAQ />
      <BottomCTA />
      <Footer />
    </>
  );
}
