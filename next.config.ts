import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["global-warming.org"], // Aggiungi altri domini se necessario
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://global-warming.org/api/:path*",
      },
    ];
  },
  env: {
    API_BASE_URL: "https://global-warming.org/api",
  },
};

export default nextConfig;
