import { DefaultTheme } from "styled-components";
const breakpoints: any = ["360px", "786px", "1024px", "1280px", "1600px"];

breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];
breakpoints.xxl = breakpoints[4];

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      dark: string;
      light: string;
      mainD: string;
      mainL: string;
      main: string;
      sec: string;
      secD: string;
    };
    fonts: {
      font1: string;
      font2: string;
    };
    breakpoints: any;
    device: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
  }
}
const theme: DefaultTheme = {
  colors: {
    dark: "#000",
    light: "#fff",
    mainD: "#1E3A8A",
    mainL: "#93C5FD",
    main: "#2563EB",
    sec: "#EBFF09",
    secD: "#FFF500",
  },
  fonts: {
    font1: "'Ruda', sans-serif",
    font2: "'Ruluko', sans-serif",
  },
  breakpoints,
  device: {
    sm: `@media (min-width: ${breakpoints[0]})`,
    md: `@media (min-width: ${breakpoints[1]})`,
    lg: `@media (min-width: ${breakpoints[2]})`,
    xl: ` @media (min-width: ${breakpoints[3]})`,
    xxl: ` @media (min-width: ${breakpoints[4]})`,
  },
};

export default theme;
