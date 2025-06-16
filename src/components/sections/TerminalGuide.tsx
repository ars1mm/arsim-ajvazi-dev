'use client';

import { motion } from 'framer-motion';

const TerminalGuide = () => {
  const commands = [
    { name: 'help', description: 'List all available commands and sections' },
    { name: 'cd about', description: 'Navigate to the About section' },
    { name: 'cd projects', description: 'Navigate to the Projects section' },
    { name: 'cd skills', description: 'Navigate to the Skills section' },
    { name: 'cd contact', description: 'Navigate to the Contact section' },
    { name: 'cd home', description: 'Navigate to the Hero section' },
    { name: 'nvim contact-me', description: 'Open the contact form' },
    { name: 'clear', description: 'Clear the terminal screen' },
  ];

  const features = [
    'Real-time keyboard interactions',
    'Section navigation',
    'Command history',
    'Tab completion',
    'MacOS-style interface',
    '3D interactive experience'
  ];  return (
    <section className="hidden md:block py-12 bg-gradient-to-b from-black to-gray-900">
      <div className="w-full mx-auto px-8 max-w-[1800px]">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Interactive Terminal <span className="text-spotify-green">Navigation</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-300 max-w-3xl mx-auto"
          >
            Explore my portfolio using the interactive 3D terminal below. Type commands to navigate between sections or interact with the site.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-medium text-white mb-4 flex items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-spotify-green" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              Available Commands
            </h3>
            <div className="space-y-2">
              {commands.map((cmd, index) => (
                <div 
                  key={cmd.name} 
                  className="flex flex-col sm:flex-row sm:items-center text-sm border-b border-gray-700/50 pb-2"
                >
                  <code className="font-mono bg-gray-900/50 px-2 py-1 rounded text-spotify-green sm:mr-4 inline-block mb-1 sm:mb-0">
                    {cmd.name}
                  </code>
                  <span className="text-gray-300">{cmd.description}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-xl font-medium text-white mb-4 flex items-center">
              <span className="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-spotify-green" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </span>
              How To Use
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Click on the terminal to focus</li>
              <li>Type commands using your keyboard</li>
              <li>Press <code className="font-mono bg-gray-900/50 px-1.5 text-xs text-spotify-green rounded">Tab</code> to autocomplete commands</li> 
              <li>Press <code className="font-mono bg-gray-900/50 px-1.5 text-xs text-spotify-green rounded">Enter</code> to execute commands</li>
              <li>Use <code className="font-mono bg-gray-900/50 px-1.5 text-xs text-spotify-green rounded">Backspace</code> to correct mistakes</li>
            </ul>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-2 flex items-center">
                <span className="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-web3-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </span>
                Features
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {features.map((feature, index) => (
                  <div key={index} className="text-sm text-gray-400 flex items-center">
                    <span className="text-spotify-green mr-1 text-xs">›</span> {feature}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="text-center mt-8 text-gray-400 text-sm"
        >
          <p>Try it now! Scroll down to interact with the terminal.</p>
          <div className="mt-2 inline-block">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-spotify-green animate-bounce" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalGuide;
