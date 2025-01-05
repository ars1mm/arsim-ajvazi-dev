'use client';

import { motion } from 'framer-motion';
import Terminal from '@/components/3d/Terminal';
import ProfilePicture from './ProfilePicture';
import ContactModal from '@/components/modals/ContactModal';

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
                <button
                  type="button"
                  onClick={() => {
                    const contactModal = document.getElementById('contact-modal');
                    if (contactModal) {
                      contactModal.classList.remove('hidden');
                    }
                  }}
                  className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
                >
                  Contact Me
                </button>
                <div className="hidden" id="contact-modal">
                  <ContactModal isOpen={true} onClose={() => {
                    const contactModal = document.getElementById('contact-modal');
                    if (contactModal) {
                      contactModal.classList.add('hidden');
                    }
                  }} />
                </div>
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
