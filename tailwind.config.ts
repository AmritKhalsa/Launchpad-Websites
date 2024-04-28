import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#fff1f1",
          100: "#ffe1e1",
          200: "#ffc8c7",
          300: "#ffa1a0",
          400: "#ff6361",
          500: "#f83d3b",
          600: "#e5201d",
          700: "#c11614",
          800: "#a01614",
          900: "#841918",
        },
        secondary: {
          "50": "#fff6e6",
          "100": "#ffedcc",
          "200": "#ffdb99",
          "300": "#ffca66",
          "400": "#ffb833",
          "500": "#ffa600",
          "600": "#cc8500",
          "700": "#996400",
          "800": "#664200",
          "900": "#332100"
        },
        third:{
          "50": "#f8eef4",
          "100": "#f2dce9",
          "200": "#e4b9d3",
          "300": "#d796bc",
          "400": "#c973a6",
          "500": "#bc5090",
          "600": "#964073",
          "700": "#713056",
          "800": "#4b203a",
          "900": "#26101d"
        },
        fourth:{
          "50": "#eeeef4",
          "100": "#dedce8",
          "200": "#bcb9d1",
          "300": "#9b96bb",
          "400": "#7973a4",
          "500": "#58508d",
          "600": "#464071",
          "700": "#353055",
          "800": "#232038",
          "900": "#12101c"
        },
        fifth: {
          "50": "#e6ecef",
          "100": "#ccd9de",
          "200": "#99b2be",
          "300": "#668c9d",
          "400": "#33657d",
          "500": "#003f5c",
          "600": "#00324a",
          "700": "#002637",
          "800": "#001925",
          "900": "#000d12"
        },
        }
      },
    },
  plugins: [],
};
export default config;
