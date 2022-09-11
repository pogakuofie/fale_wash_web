/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const withOffline = require("next-offline");

const nextConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  reactStrictMode: true,
});

module.exports = withOffline(nextConfig);
