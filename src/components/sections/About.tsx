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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                I&apos;m a passionate developer with a keen interest in building beautiful and functional web applications. With experience in both frontend and backend development, I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and mentoring.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Frontend</h3>
                <p className="text-gray-600">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Backend</h3>
                <p className="text-gray-600">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Tools</h3>
                <p className="text-gray-600">Git, Docker, AWS, Vercel</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Soft Skills</h3>
                <p className="text-gray-600">Communication, Team Leadership, Problem Solving</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
