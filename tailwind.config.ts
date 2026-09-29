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
        primary: {
          50: "#e7f6ff",
          100: "#d3eeff",
          200: "#b0ddff",
          300: "#81c5ff",
          400: "#4f9dff",
          500: "#2872ff",
          600: "#0445ff",
          700: "#0043ff",
          800: "#003be2",
          900: "#0b36a4",
          950: "#071e5f",
          DEFAULT: "#003be2",
        },
        accent: {
          50: "#fdffe4",
          100: "#faffc5",
          200: "#f2ff92",
          300: "#e4ff54",
          400: "#d4fb20",
          500: "#cbfc01",
          600: "#8cb400",
          700: "#6a8902",
          800: "#546b09",
          900: "#465a0d",
          950: "#243300",
          DEFAULT: "#d4fb20",
        },
        neutral: {
          50: "#f5f5f6",
          100: "#e5e6e8",
          200: "#ced0d3",
          300: "#abaeb5",
          400: "#82868e",
          500: "#666973",
          600: "#585a62",
          700: "#4b4c53",
          800: "#424348",
          900: "#3a3b3f",
          950: "#242528",
        },
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        satoshi: ["var(--font-satoshi)", "var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        "content": "1200px",
      },
      borderRadius: {
        "btn": "12px",
        "card": "16px",
      },
    },
  },
  plugins: [],
};

export default config;
