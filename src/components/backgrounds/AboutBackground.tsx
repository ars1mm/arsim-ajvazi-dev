'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const AboutBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#18182a] to-[#121620] pointer-events-none" />
    );
  }

  return (
    <>
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#121212] via-[#18182a] to-[#121620] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-70 pointer-events-none" />

      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute w-[300px] h-[300px] rounded-full bg-spotify-green/5 blur-[80px]"
          animate={{ 
            x: ['-20%', '30%', '-20%'],
            y: ['0%', '40%', '0%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-[250px] h-[250px] rounded-full bg-web3-purple/5 blur-[60px]"
          animate={{ 
            x: ['70%', '40%', '70%'],
            y: ['60%', '30%', '60%']
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-[200px] h-[200px] rounded-full bg-web3-blue/5 blur-[50px]"
          animate={{ 
            x: ['40%', '60%', '40%'],
            y: ['20%', '60%', '20%']
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Spotify Sound Wave Effect - Top */}
      <div className="absolute left-0 right-0 top-[15%] overflow-hidden pointer-events-none">
        <motion.div 
          className="w-full h-[1px] bg-spotify-green/20"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, #fff 30%, #fff 70%, transparent)'
          }}
        >
          <motion.div
            className="w-full h-full bg-spotify-green/30"
            animate={{ 
              scaleY: [1, 15, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>

      {/* Web3 Data Stream - Bottom */}
      <div className="absolute left-0 right-0 bottom-[20%] overflow-hidden pointer-events-none">
        <motion.div 
          className="w-full h-[1px] bg-web3-blue/20"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, #fff 30%, #fff 70%, transparent)'
          }}
        >
          <motion.div
            className="w-full h-full bg-web3-blue/30"
            animate={{ 
              scaleY: [1, 20, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2
            }}
          />
        </motion.div>
      </div>

      {/* Vertical data beams */}
      <div className="absolute top-0 bottom-0 overflow-hidden pointer-events-none flex justify-around w-full">
        {[...Array(3)].map((_, index) => (
          <motion.div 
            key={`beam-${index}`}
            className="h-full w-[1px] mx-4"
            style={{
              left: `${20 + index * 30}%`,
              background: index === 1 ? 'rgba(30, 215, 96, 0.1)' : 'rgba(61, 90, 254, 0.1)'
            }}
            animate={{ 
              opacity: [0.1, 0.4, 0.1],
              height: ['0%', '100%', '0%']
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 2
            }}
          />
        ))}
      </div>

      {/* Web3 node connections */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <div 
            key={`node-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${15 + i * 15}%`,
              boxShadow: i % 2 === 0 
                ? '0 0 8px rgba(30, 215, 96, 0.5)' 
                : '0 0 8px rgba(61, 90, 254, 0.5)'
            }}
          />
        ))}
        
        {/* Connection lines between nodes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`connection-${i}`}
            className="absolute bg-gradient-to-r from-web3-blue/10 to-spotify-green/10 h-[1px]"
            style={{
              left: `${20 + i * 15}%`,
              top: `${15 + i * 15}%`,
              width: '15%',
              transformOrigin: 'left center'
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Floating music/data particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 
                ? 'rgba(30, 215, 96, 0.7)' 
                : i % 3 === 1 
                  ? 'rgba(61, 90, 254, 0.7)' 
                  : 'rgba(169, 49, 255, 0.7)',
              boxShadow: i % 3 === 0 
                ? '0 0 5px rgba(30, 215, 96, 0.5)' 
                : i % 3 === 1 
                  ? '0 0 5px rgba(61, 90, 254, 0.5)' 
                  : '0 0 5px rgba(169, 49, 255, 0.5)'
            }}
            animate={{
              opacity: [0, 1, 0],
              y: ['0%', `${-30 - (Math.random() * 40)}%`]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.7
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AboutBackground;
