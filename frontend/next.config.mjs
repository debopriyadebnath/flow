/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracing: false,

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    domains: [
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;