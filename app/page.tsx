import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Orbit from "@/components/Orbit";
import Dossier from "@/components/Dossier";
import PrimarySchoolTeacher from "@/components/PrimarySchoolTeacher";
import Credentials from "@/components/Credentials";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";
import AuroraBackground from "@/components/AuroraBackground";

export default function Home() {
  return (
    <>
      <AuroraBackground />
      <Nav />
      <div className="grid-overlay pointer-events-none fixed inset-0 -z-10" />
      <main id="main">
        <Hero />
        <Orbit />
        <PrimarySchoolTeacher />
        <Dossier />
        <Credentials />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Assistant />
    </>
  );
}
