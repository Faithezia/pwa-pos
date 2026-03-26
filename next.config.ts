import type { NextConfig } from "next";
import path from "path";
// import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  turbopack: { //remove if issues arise
    root: path.join(__dirname, ".."),
  },
  experimental: {
    globalNotFound: true,
  },
  distDir: "build",
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};
// export default withPWA({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
// });

export default nextConfig;
