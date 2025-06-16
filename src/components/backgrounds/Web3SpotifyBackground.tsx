'use client';

import { motion } from 'framer-motion';

const Web3SpotifyBackground = () => {
  return (
    <>
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] to-[#18182a] pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-70 pointer-events-none" />

      {/* Spotify wave - bottom */}
      <div className="absolute bottom-[40px] left-0 right-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="w-full h-[2px] bg-spotify-green/40"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent)'
          }}
          animate={{ height: "2px" }}
          transition={{ duration: 0 }}
        >
          <motion.div
            className="w-full h-full bg-spotify-green/40"
            animate={{ scaleY: [1, 10, 1] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>

      {/* Web3 wave - top */}
      <div className="absolute top-[100px] left-0 right-0 pointer-events-none overflow-hidden">
        <motion.div 
          className="w-full h-[1px] bg-web3-blue/30"
          style={{
            maskImage: 'linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent)'
          }}
          animate={{ height: "1px" }}
          transition={{ duration: 0 }}
        >
          <motion.div
            className="w-full h-full bg-web3-blue/30"
            animate={{ scaleY: [1, 10, 1] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </motion.div>
      </div>

      {/* Glow spots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute left-[-20%] top-[75vh] w-[200px] h-[200px] rounded-full bg-spotify-green/10 blur-3xl"
          animate={{
            left: ['-20%', '120%'],
            top: ['75vh', '25vh']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
        <motion.div
          className="absolute right-[-20%] top-[20vh] w-[150px] h-[150px] rounded-full bg-web3-blue/10 blur-3xl"
          animate={{
            right: ['-20%', '120%'],
            top: ['20vh', '80vh']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      </div>

      {/* Overlay gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/5 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      />
    </>
  );
};

export default Web3SpotifyBackground;
