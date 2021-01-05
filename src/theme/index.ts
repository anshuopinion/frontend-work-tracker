// import { Theme } from "@emotion/react";
// const breakpoints: any = ["360px", "786px", "1024px", "1280px", "1600px"];

// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];
// breakpoints.xxl = breakpoints[4];

// declare module "@emotion/react" {
//   export interface Theme {
//     colors: {
//       dark: string;
//       light: string;
//       mainD: string;
//       mainL: string;
//       main: string;
//       sec: string;
//       secD: string;
//     };
//     fonts: {
//       font1: string;
//       font2: string;
//     };
//     breakpoints: any;
//     device: {
//       sm: string;
//       md: string;
//       lg: string;
//       xl: string;
//       xxl: string;
//     };
//   }
// }
// const theme: Theme = {
//   colors: {
//     dark: "#000",
//     light: "#fff",
//     mainD: "#1E3A8A",
//     mainL: "#93C5FD",
//     main: "#2563EB",
//     sec: "#EBFF09",
//     secD: "#FFF500",
//   },
//   fonts: {
//     font1: "'Ruda', sans-serif",
//     font2: "'Ruluko', sans-serif",
//   },
//   breakpoints,
//   device: {
//     sm: `@media (min-width: ${breakpoints[0]})`,
//     md: `@media (min-width: ${breakpoints[1]})`,
//     lg: `@media (min-width: ${breakpoints[2]})`,
//     xl: ` @media (min-width: ${breakpoints[3]})`,
//     xxl: ` @media (min-width: ${breakpoints[4]})`,
//   },
// };

// export default theme;

import { extendTheme } from "@chakra-ui/react";
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
export const theme = extendTheme({ colors });
