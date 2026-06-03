import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          base: "#0a0a0f",
        },
        surface: {
          tiles: "rgba(17, 17, 24, 0.8)",
        },
        accent: {
          primary: "#6366f1",
          secondary: "#8b5cf6",
        },
        text: {
          primary: "#f1f5f9",
          muted: "#64748b",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.06)",
        },
        glow: "rgba(99, 102, 241, 0.4)"
      },
      fontFamily: {
        syne: ["var(--font-syne)"],
        sans: ["var(--font-dm-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
