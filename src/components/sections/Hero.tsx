'use client';

import { motion } from 'framer-motion';
import Terminal from '@/components/3d/Terminal';
import ProfilePicture from './ProfilePicture';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                Hi, I&apos;m <span className="text-blue-600">Arsim Ajvazi</span>
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
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                      const duration = 1500; // Increased duration for smoother scroll
                      const startPosition = window.pageYOffset;
                      const distance = elementPosition - startPosition - 100;
                      let startTime: number | null = null;

                      function animation(currentTime: number) {
                        if (startTime === null) startTime = currentTime;
                        const timeElapsed = currentTime - startTime;
                        const progress = Math.min(timeElapsed / duration, 1);
                        
                        // Easing function for smoother animation
                        const easeInOutCubic = (progress: number) => {
                          return progress < 0.5
                            ? 4 * progress * progress * progress
                            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
                        };

                        window.scrollTo(0, startPosition + (distance * easeInOutCubic(progress)));

                        if (progress < 1) {
                          requestAnimationFrame(animation);
                        }
                      }

                      requestAnimationFrame(animation);
                    }
                  }}
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
                >
                  View My Work
                </motion.a>
                <a
                  href="#contact"
                  className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full h-[600px] hidden lg:block"
          >
            <Terminal />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
