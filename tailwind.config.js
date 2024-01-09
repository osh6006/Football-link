/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Main: "#635FC7",
        MainHover: "#A8A4FF",
        DarkGrey: "#2B2C37",
        MediumGrey: "#828FA3",
        VeryDarkGreyDark: "#20212C",
        LinesDark: "#3E3F4E",
        LinesLight: "#E4EBFA",
        LightGreyLightBg: "#F4F7FD",
        Black: "#000112",
        White: "#FFFFFF",
        Red: "#EA5555",
        RedHover: "#FF9898",
      },
    },
  },
  plugins: [],
};
