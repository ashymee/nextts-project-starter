const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  runtimeCaching,
  dest: "public",
  register: process.env.NODE_ENV === "production",
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
});

/** @type {import('next').NextConfig} nextConfig */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
};

module.exports = withPWA(nextConfig);
