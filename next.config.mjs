import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const projectRoot = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
    resolveAlias: {
      tailwindcss: join(projectRoot, "node_modules", "tailwindcss"),
      "tw-animate-css": join(projectRoot, "node_modules", "tw-animate-css"),
    },
  },
}

export default nextConfig
