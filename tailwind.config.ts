import type { Config } from "tailwindcss";
import { DEFAULT_CIPHERS } from "tls";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        tomato: "#FF6347",
        menu: "#6E7073",
        oder: "#F4EFEF",
        expore: "#383838",
        para: "#808080",
        " logoColo": "#CFBFBF",
        dishColo: "#E5E9ED",
      },
      screens: {
        ms: "340px",
        md: "540px",
        lg: "768",
        xl: "1180px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "12px",
          md: "32px",
        },
      },

      fontFamily: {
        jost: ["jost", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
      },

      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0.8)" },
        },
      },

      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
