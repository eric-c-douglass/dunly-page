/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/dunly-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/dunly-page/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
