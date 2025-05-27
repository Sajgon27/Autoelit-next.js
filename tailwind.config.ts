import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#e31e24",
        secondary: "#382929",
        background: "#0a0a0a",
        foreground: "#120c0c",
      },
    },
  },
  plugins: [],
} satisfies Config;
