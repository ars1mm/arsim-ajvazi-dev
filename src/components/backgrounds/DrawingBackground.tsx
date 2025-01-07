'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Cloud = ({ delay = 0, yPosition = 20, scale = 1 }) => (
  <motion.div
    className="absolute left-0 w-full"
    style={{
      top: `${yPosition}%`,
      transform: `scale(${scale})`,
    }}
    initial={{ x: '-100%' }}
    animate={{ 
      x: '100%',
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear",
      delay,
      repeatDelay: 0,
    }}
  >
    <svg
      width="180"
      height="80"
      viewBox="0 0 180 80"
    >
      <path
        d="M40,40 Q60,25 80,40 T120,40 Q140,25 150,40 Q165,55 150,65 Q120,80 80,65 Q40,80 15,65 Q0,55 15,40 Q20,25 40,40"
        className="fill-white stroke-sky-100"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  </motion.div>
);

const DrawingBackground = () => {
  return (
    <>
      {/* Sky background */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-sky-50" />
      
      <div className="absolute inset-0 overflow-hidden">
        {/* Sun */}
        <div className="absolute top-20 right-20">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="30"
              className="fill-yellow-100 stroke-yellow-200"
              strokeWidth="2"
            />
            {/* Sun rays */}
            {Array.from({ length: 12 }).map((_, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + Math.cos(i * Math.PI / 6) * 45}
                y2={50 + Math.sin(i * Math.PI / 6) * 45}
                className="stroke-yellow-200/50"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ))}
          </svg>
        </div>

        {/* Animated clouds */}
        <div className="relative w-full h-full">
          <Cloud yPosition={15} delay={0} scale={1.2} />
          <Cloud yPosition={25} delay={-3} scale={0.9} />
          <Cloud yPosition={10} delay={-6} scale={1} />
          <Cloud yPosition={30} delay={-9} scale={1.1} />
          <Cloud yPosition={20} delay={-12} scale={0.8} />
        </div>

        {/* Grass field */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 200"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 Q300,100 600,150 T1200,150 L1200,200 L0,200 Z"
              className="fill-emerald-100 stroke-emerald-200"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Grass details */}
            {Array.from({ length: 30 }).map((_, i) => (
              <g key={i}>
                <line
                  x1={i * 40}
                  y1={160}
                  x2={i * 40 + 15}
                  y2={140}
                  className="stroke-emerald-200"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <line
                  x1={i * 40 + 5}
                  y1={165}
                  x2={i * 40 + 20}
                  y2={145}
                  className="stroke-emerald-200/50"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </g>
            ))}
          </svg>
        </div>
      </div>
    </>
  );
};

export default DrawingBackground;
