import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 120px rgba(17, 108, 255, 0.22)",
      },
      colors: {
        electric: {
          50: "#f2f8ff",
          100: "#dceeff",
          200: "#b8deff",
          300: "#86c0ff",
          400: "#4e90ff",
          500: "#1c69ff",
          600: "#1454db",
          700: "#1244a9",
          800: "#0f387e",
          900: "#0d3062"
        },
        aurum: {
          100: "#fff2d9",
          200: "#ffe3a8",
          300: "#ffd26e",
          400: "#ffbb38",
          500: "#ff9f11",
          600: "#d9830b",
          700: "#b06a08",
          800: "#8a5607",
          900: "#6f4405"
        }
      },
      backgroundImage: {
        glass: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.14), transparent 35%), radial-gradient(circle at 80% 20%, rgba(45,118,255,0.18), transparent 0px), linear-gradient(180deg, rgba(14,29,63,0.88) 0%, rgba(4,18,48,0.96) 100%)"
      }
    },
  },
  plugins: [],
};

export default config;
