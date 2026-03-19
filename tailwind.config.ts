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
        primary: {
          50: "#f0f7f4",
          100: "#d9ebe2",
          200: "#b6d9c9",
          300: "#86c0a8",
          400: "#56a084",
          500: "#36856c",
          600: "#286b57",
          700: "#225648",
          800: "#1e463b",
          900: "#1b3a32",
          950: "#0d201b",
        },
        accent: {
          50: "#fdf8f3",
          100: "#f9ede0",
          200: "#f2d9bf",
          300: "#e9bf94",
          400: "#de9d62",
          500: "#d68242",
          600: "#c86d38",
          700: "#a65530",
          800: "#85452c",
          900: "#6c3a27",
          950: "#3a1c12",
        },
        neutral: {
          850: "#1a1d21",
          925: "#0f1114",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
