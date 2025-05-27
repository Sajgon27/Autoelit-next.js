import type { NextConfig } from "next";

const nextConfig: NextConfig = {
<<<<<<< HEAD
     output: 'export',
=======
      output: 'export',
 images: {
    unoptimized: true
  },
>>>>>>> e5c0a3e99c88082debc2614735a8dd54f2ebc5f1
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
