import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Quote from "@/components/Quote";
import ProblemSolution from "@/components/ProblemSolution";
import Stats from "@/components/Stats";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Markets from "@/components/Markets";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Projects />
      <Quote />
      <ProblemSolution />
      <Stats />
      <HowItWorks />
      <Services />
      <Markets />
      <Testimonials />
      <FAQ />
      <BottomCTA />
      <Footer />
    </>
  );
}
