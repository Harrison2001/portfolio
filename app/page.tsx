import Hero from "@/components/Hero";
import SkillOrbit from "@/components/SkillOrbit";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Domains from "@/components/Domains";
import Architecture from "@/components/Architecture";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SkillOrbit />
      <Projects />
      <Timeline />
      <Domains />
      <Architecture />
      <Footer />
    </main>
  );
}