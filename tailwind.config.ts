import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        body: "#161616",
        sidebar: "#1C1C1C",
      },

      width: {
        sidebar: "280px",
      },

      borderColor: {
        global: "#242424",
      },

      textColor: {
        body: "#F6F6F6",
      },
    },
  },
  plugins: [],
};
export default config;
