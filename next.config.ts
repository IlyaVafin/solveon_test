import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
   images: {
    remotePatterns: [new URL('https://boringapi.com/api/v1/static/**')],
  },
};

export default nextConfig;
