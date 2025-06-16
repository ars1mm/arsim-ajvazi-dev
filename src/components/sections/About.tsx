'use client';

import { motion } from 'framer-motion';
import AboutBackground from '@/components/backgrounds/AboutBackground';
import { SiBlockchaindotcom } from 'react-icons/si';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about-section" className="py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Background */}
      <AboutBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          {/* Section Header */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              About <span className="text-spotify-green">Me</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-web3-blue via-spotify-green to-web3-purple mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* About Me Content - Left Side */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 order-2 lg:order-1"
            >
              <div className="backdrop-blur-md bg-black/20 p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-4">
                  <SiBlockchaindotcom className="text-web3-purple text-2xl" />
                  <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                </div>
              
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-300 leading-relaxed mb-6"
                >
                  As a passionate Software Engineer based in Macedonia, I'm currently advancing my expertise through a Computer Science and Engineering degree at the University "Mother Tereza" in Skopje. My journey in technology is driven by a deep fascination with full-stack development, where I combine technical knowledge with creative problem-solving to build robust, innovative solutions.
                </motion.p>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-300 leading-relaxed"
                >
                  Beyond my academic pursuits, I actively engage in personal projects and open-source contributions, constantly exploring new technologies like Web3 and modern interfaces inspired by Spotify&apos;s clean aesthetics. I believe in writing clean, efficient code and creating intuitive user experiences that solve real-world problems.
                </motion.p>
                
                {/* Interest Pills */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-8 flex flex-wrap gap-2"
                >
                </motion.div>
                
                {/* Call to action */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-8 text-center"
                >
                </motion.div>
              </div>
            </motion.div>
            
            {/* Profile picture - Right Side */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full border-4 border-spotify-green/30 shadow-xl shadow-spotify-green/20">
                <Image
                  src="/images/arsim-ajv.jpg"
                  alt="Arsim Ajvazi"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
