import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    additionalData: `@use "@/styles/variables.scss" as *;`,
  },
};

export default nextConfig;
