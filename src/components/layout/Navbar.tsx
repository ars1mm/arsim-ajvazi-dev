'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useScrollTo } from '@/hooks/useScrollTo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string | null) => {
    e.preventDefault();
    scrollTo(id);
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="fixed w-full bg-gray-800/95 backdrop-blur-sm z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a 
              href="/" 
              onClick={(e) => handleClick(e, null)} 
              className="text-xl font-bold text-white hover:text-gray-200 transition-colors"
            >
              Arsim Ajvazi
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about-section" onClick={(e) => handleClick(e, 'about-section')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              About
            </a>
            <a href="#skills-section" onClick={(e) => handleClick(e, 'skills-section')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Skills
            </a>
            <a href="#projects-section" onClick={(e) => handleClick(e, 'projects-section')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Projects
            </a>
            <a href="#contact-section" onClick={(e) => handleClick(e, 'contact-section')} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Contact
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about-section" onClick={(e) => handleClick(e, 'about-section')} className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">
              About
            </a>
            <a href="#projects-section" onClick={(e) => handleClick(e, 'projects-section')} className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">
              Projects
            </a>
            <a href="#skills-section" onClick={(e) => handleClick(e, 'skills-section')} className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">
              Skills
            </a>
            <a href="#contact-section" onClick={(e) => handleClick(e, 'contact-section')} className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
