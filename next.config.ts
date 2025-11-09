import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Skip build-time prerendering for pages with dynamic features
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: false,
  },
};

export default nextConfig;
