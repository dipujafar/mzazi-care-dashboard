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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "main-color": "#8d2e7d",
        black: "#333",
        primaryBlack: "#242321",
        primaryGray: "#7D7871",
        lightPink: "#FFF2F5",
      },
    },
  },
  plugins: [],
};
export default config;
