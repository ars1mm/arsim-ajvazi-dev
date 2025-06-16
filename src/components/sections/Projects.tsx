'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import { projects } from '@/data/projectsData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

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
      containerRef.current.style.scrollBehavior = 'auto';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    if (containerRef.current) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 1.5; 
      containerRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (containerRef.current) {
      containerRef.current.style.scrollBehavior = 'smooth';
    }
  };

  return (
    <section id="projects-section" className="py-20 relative z-20 w-screen overflow-hidden bg-gray-900">
      {/* Simple subtle background instead of complex animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-50"></div>
        <div className="container mx-auto px-4 relative">
        <div>
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-6 py-2 rounded-full bg-web3-blue text-white text-sm font-medium mb-4">
              SHOWCASE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
              Featured <span className="text-spotify-green">Projects</span>
            </h2>
            <p className="text-gray-300 text-center max-w-2xl">
              Explore some of my recent work that showcases my skills and passion for building great digital experiences
            </p>
          </div>
          
          <div className="relative w-full">
            <div 
              ref={containerRef}
              className="overflow-x-auto pb-12 hide-scrollbar select-none w-full scroll-smooth"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              style={{ 
                cursor: isDragging ? 'grabbing' : 'grab',
                scrollBehavior: 'smooth',
                WebkitOverflowScrolling: 'touch'
              }}
            >              <div 
                className="flex space-x-6 pl-8 pr-8" 
                style={{ width: "max-content" }}
              >
                {projects.map((project, index) => (
                  <div                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col"
                    style={{ width: "min(400px, 80vw)" }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 400px) 80vw, 400px"
                        priority={index < 2} // Load first two images with priority
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800"></div>
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow relative z-10">
                      <h3 className="text-xl font-bold mb-2 text-white">
                        {project.title}
                      </h3>
                      <div className="mb-3 flex-grow overflow-hidden">
                        <p className="text-gray-300 text-sm line-clamp-4">
                          {project.description}
                        </p>
                      </div>
                        <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              tagIndex % 2 === 0 ? 'bg-blue-900 text-blue-100' : 
                              'bg-green-900 text-green-100'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-web3-blue text-white px-4 py-1.5 rounded-md hover:bg-spotify-green transition-colors text-sm"
                      >
                        {project.link.includes('github') ? 
                          <><FaGithub className="text-xs" /> View on GitHub</> : 
                          <><FaExternalLinkAlt className="text-xs" /> View Live</>
                        }
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Simple dots for pagination */}
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.min(4, projects.length) }).map((_, i) => (
                <div 
                  key={i}
                  className="h-1 w-4 rounded-full bg-gray-600"
                ></div>
              ))}
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
        </div>      </div>
    </section>
  );
};

export default Projects;
