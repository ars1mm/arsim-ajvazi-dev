'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

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
  {
    title: "Hotel Reservation Form",
    description: "Hotel reservation in C# Windows Forms",
    tags: ["C#", "Windows Forms"],
    image: "/images/projects/hotel_reservation.jpg",
    link: "https://github.com/ars1mm/hotel-reservation"
  },
  {
    title: "EasyUI",
    description: "Open Source Library for UI Built on C",
    tags: ["C","Open Source"],
    image: "/images/projects/netflix-clone.jpg", // Temporary placeholder
    link: "#"
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting application",
    tags: ["JavaScript", "Weather API", "CSS"],
    image: "/images/projects/spotfiy-clone.jpg", // Temporary placeholder
    link: "#"
  },
  {
    title: "Task Manager",
    description: "Personal task management application with reminders",
    tags: ["React", "Redux", "Firebase"],
    image: "/images/projects/hotel_reservation.jpg", // Temporary placeholder
    link: "#"
  }
];

const Projects = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="projects-section" className="py-20 bg-gray-50 relative z-20 w-screen overflow-hidden">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Featured Projects
          </h2>
          
          <div className="relative w-full">
            <div 
              ref={containerRef}
              className="overflow-x-auto pb-8 hide-scrollbar select-none w-full"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
              <div 
                className="flex space-x-8 pl-8 pr-8" 
                style={{ width: "max-content" }}
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    whileHover={!isDragging ? { y: -5 } : {}}
                    className="bg-white rounded-xl overflow-hidden shadow-lg flex-shrink-0"
                    style={{ width: "min(450px, 80vw)" }}
                  >
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
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
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        View Project →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <style jsx global>{`
            .hide-scrollbar {
              scrollbar-width: none;
              -ms-overflow-style: none;
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
