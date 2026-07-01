import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The route indicator badge isn't part of the product UI — off in dev too,
  // not just absent from production builds.
  devIndicators: false,
};

export default nextConfig;
