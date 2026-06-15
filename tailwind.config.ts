import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E293B",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#334155",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#DC2626",
          foreground: "#FFFFFF",
        },
        background: "#0F172A", // Forced Dark Mode Primary
        foreground: "#F8FAFC",
        muted: {
          DEFAULT: "#1E293B",
          foreground: "#94A3B8",
        },
        border: "#334155",
      },
      fontFamily: {
        heading: ["var(--font-archivo)", "sans-serif"],
        body: ["var(--font-space-grotesk)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
