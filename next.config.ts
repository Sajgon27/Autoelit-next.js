import type { NextConfig } from "next";

const nextConfig: NextConfig = {
      output: 'export',
 images: {
    unoptimized: true
  },
   webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
