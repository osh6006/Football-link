const { colors, keyframs, animations } = require("./src/data/tailwind-data");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: colors,
      keyframes: keyframs,
      animation: animations,
    },
  },
  plugins: [],
};
