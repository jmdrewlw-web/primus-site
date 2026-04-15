import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#111111",
        purple: {
          500: "#8B5FC7",
          600: "#7B3DB0",
          700: "#6B2FA0",
        },
        gold: {
          DEFAULT: "#D4A843",
          light: "#E8C973",
        },
        gray: {
          50: "#f7f7f7",
          100: "#f0f0f0",
          200: "#e5e5e5",
          400: "#999999",
          600: "#666666",
          800: "#333333",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
