/** @type {import('tailwindcss').Config} */
module.exports = {
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
        primary: "#171010",
        secondary: "#FBF6F0",
        text_primary: "#060E0E",
        text_secondary: "#4E4E4E",
        text_primary_light: "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        saol: ["var(--saol-type)"],
        poppins: ["Poppins", "sans-serif"],
        sacramento: ["Sacramento", "cursive"],
      },
    },
  },
  plugins: [],
};
