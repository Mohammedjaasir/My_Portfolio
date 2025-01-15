/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "imgix",
    path: "/assets/",
    unoptimized: true,
  },
  pwa: {
    dest: "public",
  },
  output: "export",
};

module.exports = withPWA(nextConfig);
