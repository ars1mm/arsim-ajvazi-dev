'use client';

import { motion } from 'framer-motion';
import AboutBackground from '@/components/backgrounds/AboutBackground';
import { FaCode, FaServer, FaShieldAlt, FaLaptopCode } from 'react-icons/fa';
import { SiBlockchaindotcom } from 'react-icons/si';
import { IoIosMusicalNotes } from 'react-icons/io';

// Skill categories with icons
const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <FaCode className="text-spotify-green text-2xl" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    title: 'Backend Development',
    icon: <FaServer className="text-web3-blue text-2xl" />,
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Cyber Security',
    icon: <FaShieldAlt className="text-web3-purple text-2xl" />,
    skills: ['Network Security', 'Penetration Testing', 'Security Audits', 'Encryption']
  },
];

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
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* About Me Content - Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 order-2 lg:order-1"
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
                  I&apos;m a Software Engineer from Macedonia, currently pursuing my degree in Computer Science and Engineering at the University &quot;Mother Tereza&quot; in Skopje. With a passion for creating innovative solutions, I specialize in full-stack development and have a keen interest in Cyber Security.
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
                  <span className="bg-web3-blue/10 text-web3-blue border border-web3-blue/30 px-4 py-1.5 rounded-full text-sm">Web3</span>
                  <span className="bg-spotify-green/10 text-spotify-green border border-spotify-green/30 px-4 py-1.5 rounded-full text-sm">Music Tech</span>
                  <span className="bg-web3-purple/10 text-web3-purple border border-web3-purple/30 px-4 py-1.5 rounded-full text-sm">Cloud Computing</span>
                  <span className="bg-web3-blue/10 text-web3-blue border border-web3-blue/30 px-4 py-1.5 rounded-full text-sm">UI/UX Design</span>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Skills - Right Column */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 order-1 lg:order-2"
            >
              <div className="backdrop-blur-md bg-black/20 p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-6">
                  <FaLaptopCode className="text-spotify-green text-2xl" />
                  <h3 className="text-2xl font-bold text-white">Skills & Expertise</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                      className="backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        {category.icon}
                        <h4 className="font-medium text-white">{category.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {category.skills.map((skill) => (
                          <li key={skill} className="text-gray-300 text-sm flex items-center">
                            <motion.span
                              initial={{ opacity: 0, width: 0 }}
                              whileInView={{ opacity: 1, width: '8px' }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.3 }}
                              className="h-[1px] bg-spotify-green/60 mr-2 inline-block"
                            />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
                
                {/* Call to action */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-8 text-center"
                >
                  <a 
                    href="#projects-section" 
                    className="inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-web3-blue/20 to-spotify-green/20 text-white border border-spotify-green/30 hover:border-spotify-green/60 transition-all duration-300"
                  >
                    View My Work
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
