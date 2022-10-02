const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  runtimeCaching,
  dest: "public",
  register: process.env.NODE_ENV === "production",
  disable: process.env.NODE_ENV === "development",
  skipWaiting: true,
});
const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} nextConfig */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "api.codiga.io",
      "app.codiga.io",
      "htpqxbnegiziuzrzrgbl.supabase.co",
      "lh3.googleusercontent.com",
      "ipgeolocation.io",
      "media.giphy.com",
      "res.cloudinary.com",
    ],
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
  i18n,
};

module.exports = withPWA(nextConfig);
