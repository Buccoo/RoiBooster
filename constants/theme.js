/** @format */

import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#B4812A", // oro/marroncino
  secondary: "#F5DD64", // oro/giallo
  terziary: "#F4E38B", // oro/giallo chiaro
  // colors
  gold: "#C99F47",
  gray: "3E3D40",
  black: "#1E1F20",
  white: "#FFFFFF",

  green1: "#0c8343",
  green2: "#6db58e",
  pink1: "#e2aedd",
  pink2: "#ebcbf4",
  red1: "#2e0e02",
  red2: "#581908",
  red3: "#983628",
  transparent: "transparent",
  darkgray: "#898C95",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: "Baskerville",
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: { fontFamily: "Baskerville", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "Baskerville", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "Baskerville", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "Baskerville", fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: "Baskerville",
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: "Baskerville",
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: "Baskerville",
    fontSize: SIZES.body3,
    lineHeight: 22,
  },
  body4: {
    fontFamily: "Baskerville",
    fontSize: SIZES.body4,
    lineHeight: 22,
  },
  body5: {
    fontFamily: "Baskerville",
    fontSize: SIZES.body5,
    lineHeight: 22,
  },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;
