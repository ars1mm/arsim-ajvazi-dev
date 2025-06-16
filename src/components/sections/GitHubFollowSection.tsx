'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const GitHubFollowSection = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-spotify-green/5 via-transparent to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* GitHub Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-spotify-green/20 to-web3-purple/20 border border-spotify-green/30 shadow-lg shadow-spotify-green/10">
              <FaGithub className="text-4xl md:text-5xl text-white" />
            </div>
          </motion.div>

          {/* Main Text */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Follow me on <span className="text-spotify-green">GitHub</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Check out my open-source projects, contributions, and code repositories. 
            I regularly share my work and collaborate with the developer community.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.a
              href="https://github.com/ars1mm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-spotify-green/20 to-web3-purple/20 text-white border border-spotify-green/50 hover:border-spotify-green/80 transition-all duration-300 text-lg font-medium group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="text-xl" />
              <span>Follow on GitHub</span>
              <FaExternalLinkAlt className="text-sm opacity-70 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </motion.div>

          {/* Stats or additional info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-spotify-green">50+</div>
              <div className="text-sm text-gray-400">Repositories</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-web3-purple">100+</div>
              <div className="text-sm text-gray-400">Commits</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold text-web3-blue">5+</div>
              <div className="text-sm text-gray-400">Languages</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubFollowSection;
