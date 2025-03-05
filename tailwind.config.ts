import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "#0A0A0A",
        primary: "#3D639A",
      },
      fontSize: {
        "18px": ["18px", { lineHeight: "28px" }], // Custom font size with line height
        "42px": ["42px", { lineHeight: "58px" }], // Custom font size with line height
        "24px": ["24px", { lineHeight: "32px" }], // Custom font size with line height
      },
    },
  },
  plugins: [],
} satisfies Config;
