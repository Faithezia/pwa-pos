// next.config.mjs
import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  // PWA options must be nested under 'pwa' property
  pwa: {
    dest: "public", // destination for service worker
    disable: process.env.NODE_ENV === "development", // disable in dev
    register: true, // auto-register SW
    skipWaiting: true, // immediately activate new SW
  },
};

export default withPWA(nextConfig);
