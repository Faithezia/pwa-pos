// next.config.mjs

import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development", // Remove console.log in production
  },
};

export default withPWA({
  ...nextConfig,
  dest: "public", // destination directory for the PWA files
  disable: process.env.VERCEL === "1", // disable PWA in the development environment
  register: true, // register the PWA service worker
  skipWaiting: true, // skip waiting for service worker activation
});

// export default withPWA({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   skipWaiting: true,
// })(nextConfig);
