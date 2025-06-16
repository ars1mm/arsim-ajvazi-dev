import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TerminalGuide from '@/components/sections/TerminalGuide';
import TerminalSection from '@/components/sections/TerminalSection';
import TerminalMobileMessage from '@/components/sections/TerminalMobileMessage';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>      <Navbar />      <main className="min-h-screen overflow-hidden">        <Hero />
        <TerminalGuide />
        <TerminalMobileMessage />
        <TerminalSection />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
