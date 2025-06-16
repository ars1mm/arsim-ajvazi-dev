import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import GitHubFollowSection from '@/components/sections/GitHubFollowSection';
import TerminalGuide from '@/components/sections/TerminalGuide';
import TerminalSection from '@/components/sections/TerminalSection';
import TerminalMobileMessage from '@/components/sections/TerminalMobileMessage';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>      <Navbar />      <main className="min-h-screen overflow-hidden">        <Hero />
        <GitHubFollowSection />
        <TerminalGuide />
        <TerminalMobileMessage />
        <TerminalSection />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
