'use client';

import { motion } from 'framer-motion';
import ContactModal from '@/components/modals/ContactModal';
import Web3SpotifyBackground from '@/components/backgrounds/Web3SpotifyBackground';
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="hero-section" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full bg-black">
      <Web3SpotifyBackground />

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >            <div className="flex flex-col items-center space-y-4 sm:space-y-6">              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                Hi, I'm <span className="text-spotify-green">Arsim Ajvazi</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4">
               Software Engineer
              </p>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-gray-200 w-full max-w-5xl mx-auto mb-2 sm:mb-4 px-2"
              >
                <p className="text-sm sm:text-base md:text-lg">
                  I specialize in building modern web applications with React, Next.js, TypeScript, and Node.js.
                  With a passion for clean code and user-centric design, I create elegant solutions to complex problems.
                </p>
                <p className="hidden sm:block text-sm sm:text-base md:text-lg mt-2">
                  With 5+ years of experience in software development, I've worked on projects ranging from e-commerce platforms to data visualization tools.
                  My expertise includes front-end development, back-end architecture, and cloud deployment.
                </p>
              </motion.div>

              {/* <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-3 sm:mb-4 w-full px-1"
              >
                {["TypeScript", "React", "Next.js", "Node.js", "AWS", "MongoDB"].map((skill, index) => (
                  <span 
                    key={skill}
                    className={`px-2 py-1 sm:px-3 text-xs sm:text-sm rounded-full my-1
                      ${index % 3 === 0 ? 'bg-spotify-green/20 text-spotify-green border border-spotify-green/50' : 
                      index % 3 === 1 ? 'bg-purple-900/30 text-purple-300 border border-purple-500/50' : 
                      'bg-blue-900/30 text-blue-300 border border-blue-500/50'}`}
                  >
                    {skill}
                  </span>
                ))}
              </motion.div> */}

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mt-1 sm:mt-2 w-full px-4 sm:px-0 justify-center">
                <motion.a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('projects-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  initial={{ x: 0 }}
                  whileHover={{ x: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="bg-spotify-green text-black font-semibold px-8 py-3 rounded-full hover:bg-spotify-green/90 shadow-lg shadow-spotify-green/20"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact-section"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact-section');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  initial={{ x: 0 }}
                  whileHover={{ x: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="border border-white/50 bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full hover:bg-white/20"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
