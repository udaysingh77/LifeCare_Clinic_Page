import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
        pathname: "/api/**",
      },
    ],
  },
  // Enable static export for Vercel (optional, comment out if using SSR features)
  // output: "export",
};

export default nextConfig;
