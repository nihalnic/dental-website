// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#182d2e",
          600: "#0f2122",
        },
        border: "#1f2e2f",
        white: {
          DEFAULT: "#f4f4f4",
          500: "#d1d5d6",
          600: "#a0a9aa",
        },
        red: {
          500: "#ff6b6b",
        },
        green: {
          primary: "#3fcf8e",
          500: "#7fd6c0",
          600: "#4fb8a4",
        },
        theme: {
          background: "#0f2122",
          card: "#182d2e",
          border: "#1f2e2f",
          heading: "#f4f4f4",
          body: "#d1d5d6",
          placeholder: "#a0a9aa",
          link: "#4fb8a4",
          linkHover: "#7fd6c0",
          error: "#ff6b6b",
          success: "#3fcf8e",
        },
      },
    },
  },
  plugins: [],
};
export default config;
