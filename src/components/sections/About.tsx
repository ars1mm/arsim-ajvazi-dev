'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 text-gray-900">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 leading-relaxed mb-6 text-lg md:text-xl">
              I&apos;m a Software Engineer from Macedonia, currently pursuing my degree in Computer Science and Engineering at the University &quot;Mother Tereza&quot; in Skopje. With a passion for creating innovative solutions, I specialize in full-stack development and have a keen interest in Cyber Security, focusing on building secure and robust applications.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg md:text-xl">
              Beyond my academic pursuits, I actively engage in personal projects and open-source contributions, constantly exploring new technologies and best practices in software development. I believe in writing clean, efficient code and creating intuitive user experiences that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
