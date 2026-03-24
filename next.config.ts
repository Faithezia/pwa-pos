import type { NextConfig } from "next";
import path from "path";
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  turbopack: {
    // optional
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

export default withPWA({
  ...nextConfig,
  dest: "public",
  register: true,
  skipWaiting: true,
});
