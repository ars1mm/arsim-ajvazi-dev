'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

// LIST OF PROJECTS GOES HERE! -- ADD THEM HERE
const projects: Project[] = [
  {
    title: "Netflix Clone",
    description: "A full-stack application built with React and Firebase",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "/images/projects/netflix-clone.jpg",
    link: "https://github.com/ars1mm/netflix-app"
  },
  {
    title: "Spotify Clone",
    description: "Spotify clone using React and Tailwind CSS",
    tags: ["React", "Tailwind CSS"],
    image: "/images/projects/spotfiy-clone.jpg",
    link: "https://github.com/ars1mm/spotify-clone"
  },
];

const Projects = () => {
  return (
    <section id="projects-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
