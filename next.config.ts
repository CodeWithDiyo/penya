import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
   output: 'export', // Enables static exports
  images: {
    unoptimized: true, // Required for static exports
  },
  // Add env variable for Convex
  env: {
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
  },
};

export default nextConfig;

module.exports = nextConfig;