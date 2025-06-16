'use client';

import { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Terminal component with SSR disabled
const Terminal = dynamic(() => import('@/components/3d/Terminal'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-white bg-gray-800 rounded-xl">Loading terminal...</div>
});

const TerminalSection = () => {
  const [isClient, setIsClient] = useState(false);
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsClient(true);

    const updateDimensions = () => {
      if (terminalContainerRef.current) {
        const { width, height } = terminalContainerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    // Initial update
    updateDimensions();

    // Create observer
    const observer = new ResizeObserver(updateDimensions);
    if (terminalContainerRef.current) {
      observer.observe(terminalContainerRef.current);
    }

    // Update on scroll
    window.addEventListener('scroll', updateDimensions);
    
    // Force multiple updates to ensure proper sizing
    const timeouts = [100, 500, 1000].map(delay => 
      setTimeout(updateDimensions, delay)
    );

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', updateDimensions);
      timeouts.forEach(clearTimeout);
    };
  }, []);  return (    <section id="terminal-section" className="hidden md:block py-16 bg-gray-900">
      <div className="w-full mx-auto px-8 max-w-[1800px]">
        <div className="flex justify-center">
          <div 
            ref={terminalContainerRef}
            className="relative h-[500px] w-full mx-auto overflow-hidden rounded-xl shadow-2xl shadow-spotify-green/10"
          >
            {isClient && (
              <Terminal />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalSection;
