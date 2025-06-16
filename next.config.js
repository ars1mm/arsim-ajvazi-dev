/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  transpilePackages: ['three'],
  webpack: (config) => {
    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      'bufferutil': 'commonjs bufferutil',
    });
    
    // Optimize for development speed
    if (process.env.NODE_ENV === 'development') {
      // Reduce the amount of information webpack has to process
      config.watchOptions = {
        ignored: /node_modules/,
        poll: 1000,
      };
      
      // Use eval-source-map for faster rebuilds
      config.devtool = 'eval-source-map';
    }
    
    return config;
  },
  // Improve development performance
  swcMinify: true,
  reactStrictMode: true,
}

module.exports = nextConfig
