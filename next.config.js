/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
      {
        hostname: "source.unsplash.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === "production",
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production",
  },
};

module.exports = nextConfig;
