const COLORS = {
  primary: "#312651",
  secondary: "#444262",
  tertiary: "#FF7754",

  gray: "#FAFAFC",
  gray2: "#F2F2F2",
  blue: "#9DE8FF",
  purple: "#E3BFFF",
  pink2: "#FF7CAB",
  black: "#161616",
  white: "#FFFFFF",
  red: "#FF0000",
  pink: "#FF427B",
  lightWhite: "#FAFAFC",
  grad1: [`#FF00D69E`, `#2F0DFF9F`],
  grad2: [`#000AFF9F`,`#A03FCE9F`],
};

const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };


import profile from "../assets/images/nippon-logo.png";

export default {
  profile,
};
