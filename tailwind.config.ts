import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F6F3EE",
        "cream-light": "#EFECE6",
        dark: "#1A1A1A",
        mid: "#5A5651",
        light: "#8A857E",
        accent: "#6B2FA0",
        "accent-hover": "#7B3FB0",
        border: "#E2DFD8",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
