/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.freepik.com",
      "i.pinimg.com",
      "cdn.dribbble.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
