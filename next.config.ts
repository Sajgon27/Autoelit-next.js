import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     output: 'export',
 images: {
    loader: 'imgix',
    path: 'https://smd-web-397095246.imgix.net',
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
