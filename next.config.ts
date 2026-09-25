import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build to plain static files so the site can be hosted for free (e.g. GitHub Pages).
  output: "export",
};

export default nextConfig;
