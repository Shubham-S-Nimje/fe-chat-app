/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["group-chatapp-1.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
