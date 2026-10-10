import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export so the same build works on GitHub Pages and Vercel.
  output: "export",
  // Required for static hosts — next/image optimization needs a server.
  images: {
    unoptimized: true,
  },
  // GitHub Pages serves directory indexes cleanly as /path/ → path/index.html
  trailingSlash: true,
  // The build was inferring the workspace root from a stray lockfile in the
  // home directory and warning about it on every run. Pin it to this project.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
