/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputStandalone: true,
  },
  reactStrictMode: true,
  trailingSlash: true,
  distDir: 'dist',
};

module.exports = nextConfig;
