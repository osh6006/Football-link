export const colors = {
  Main: "#635FC7",
  MainHover: "#A8A4FF",
  Seondary: "rgba(99, 95, 199, 0.10)",
  SeondaryHover: "rgba(99, 95, 199, 0.25)",
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
  Disabled: "#bdc3c7",
  DisabledColor: "#ecf0f1",
};

export const keyframs = {
  fadeIn: {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  fadeOut: {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
    },
  },
  slideUp: {
    "0%": {
      transform: "translateY(-100px)",
    },
    "100%": {
      opacity: "translateY(0px)",
    },
  },
  slideDown: {
    "0%": {
      transform: "translateY(0px)",
    },
    "100%": {
      opacity: "translateY(-100px)",
    },
  },
};

export const animations = {
  fadeIn: "fadeIn 0.3s ease-in-out",
  fadeOut: "fadeOut 0.3s ease-in-out",
};
