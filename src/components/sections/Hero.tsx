'use client';

import { motion } from 'framer-motion';
import Terminal from '@/components/3d/Terminal';
import ProfilePicture from './ProfilePicture';
import ContactModal from '@/components/modals/ContactModal';
import DrawingBackground from '@/components/backgrounds/DrawingBackground';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsClient(true);

    const updateDimensions = () => {
      if (terminalContainerRef.current) {
        const { width, height } = terminalContainerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial update
    updateDimensions();

    // Create observer
    const observer = new ResizeObserver(updateDimensions);
    if (terminalContainerRef.current) {
      observer.observe(terminalContainerRef.current);
    }

    // Update on scroll
    window.addEventListener('scroll', updateDimensions);
    
    // Force multiple updates to ensure proper sizing
    const timeouts = [100, 500, 1000].map(delay => 
      setTimeout(updateDimensions, delay)
    );

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateDimensions);
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
      <DrawingBackground />
      <div className="container mx-auto px-4 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="flex flex-col items-center lg:items-start space-y-6">
              <ProfilePicture />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Hi, I'm <span className="text-blue-600">Arsim Ajvazi</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600">
                Software Engineer
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('projects-section');
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      });
                    }
                  }}
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
                >
                  View My Work
                </motion.a>
              </div>
            </div>
          </motion.div>
          <div 
            ref={terminalContainerRef}
            className="relative h-[400px] w-full max-w-[500px] mx-auto hidden lg:block overflow-hidden"
          >
            {isClient && (
              <Terminal />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
