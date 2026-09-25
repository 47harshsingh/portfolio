import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import FeaturedWork from "@/components/FeaturedWork";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Statement from "@/components/Statement";
import Stats from "@/components/Stats";
import ToolMarquee from "@/components/ToolMarquee";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <ToolMarquee />
        <About />
        <FeaturedWork />
        <Stats />
        <Skills />
        <Experience />
        <Statement />
        <Contact />
      </main>
    </>
  );
}
