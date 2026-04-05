import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // This tells Next.js: "Stop looking at the parent folder, THIS is the root."
    root: resolve(__dirname, "."),
  },
};

export default nextConfig;
