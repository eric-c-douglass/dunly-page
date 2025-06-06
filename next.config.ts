import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Dunly-Page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Dunly-Page/' : '',
};

export default nextConfig;
