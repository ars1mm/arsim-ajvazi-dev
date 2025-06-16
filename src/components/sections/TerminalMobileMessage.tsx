'use client';

import { motion } from 'framer-motion';

const TerminalMobileMessage = () => {
  return (
    <section className="block md:hidden py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md mx-auto bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
        >
          <div className="text-spotify-green mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Desktop Experience</h3>
          <p className="text-gray-300 text-sm mb-4">
            The interactive terminal is designed for desktop use with a keyboard.
            Please view this portfolio on a larger screen to access the terminal experience.
          </p>
          <div className="text-xs text-gray-400">
            <p>All navigation features are still available through the menu.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalMobileMessage;
