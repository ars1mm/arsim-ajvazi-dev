'use client';

import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaDatabase, FaTools, FaCog, FaBrain } from 'react-icons/fa';

const skills = [
  {
    category: 'Frontend Development',
    icon: <FaCode className="text-spotify-green text-2xl" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js']
  },
  {
    category: 'Backend Development',
    icon: <FaCog className="text-web3-blue text-2xl" />,
    items: ['Flask', 'Spring Boot', 'C#', '.NET Core', 'Express.js']
  },
  {
    category: 'Cloud & DevOps',
    icon: <FaCloud className="text-web3-purple text-2xl" />,
    items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform']
  },
  {
    category: 'Database Systems',
    icon: <FaDatabase className="text-spotify-green text-2xl" />,
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Azure SQL', 'DynamoDB', 'Cosmos DB']
  },
  {
    category: 'Algorithm Design',
    icon: <FaBrain className="text-web3-blue text-2xl" />,
    items: ['Data Structures', 'Graph Algorithms', 'Dynamic Programming', 'System Design', 'Optimization', 'Algorithm Analysis']
  },
  {
    category: 'Development Tools',
    icon: <FaTools className="text-web3-purple text-2xl" />,
    items: ['Git', 'VS Code', 'Postman', 'Jest', 'Webpack', 'Vite']
  }
];

const Skills = () => {
  return (
    <section id="skills-section" className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,_var(--tw-gradient-stops))] from-spotify-green/5 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,_var(--tw-gradient-stops))] from-web3-purple/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <motion.div
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              <span className ="text-spotify-green">Skills</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-web3-blue via-spotify-green to-web3-purple mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="backdrop-blur-md bg-black/20 p-6 rounded-2xl border border-white/10 shadow-lg hover:border-spotify-green/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold text-white">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <motion.span
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: '6px' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) + 0.2 }}
                        className="h-[1px] bg-spotify-green/60 mr-2 inline-block"
                      />
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Passionate about leveraging cutting-edge technologies to solve complex problems and create scalable solutions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
