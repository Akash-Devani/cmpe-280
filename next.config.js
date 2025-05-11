/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Transpile 'undici' module
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules\/undici/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['next/babel'],
          },
        },
      });
  
      return config;
    },
  };
  
  module.exports = nextConfig;