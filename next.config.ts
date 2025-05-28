import type { NextConfig } from "next";

const nextConfig: NextConfig = {
     output: 'export',
       images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://smd-web-314690922.imgix.net",
      },
    ],
    loader: "custom",
    loaderFile: "./loader.js",
  },
 
  //hm
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
