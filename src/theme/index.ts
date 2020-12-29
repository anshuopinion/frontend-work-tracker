import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      dark: string;
      light: string;
      mainD: string;
      mainL: string;
      main: string;
      sec: string;
      secD: string;
    };
    font: {
      font1: string;
      font2: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      tiny: string;
      base: string;
      lg: string;
      xl: string;
      xl2: string;
      xl3: string;
      xl4: string;
      xl5: string;
      xl6: string;
      xl7: string;
    };
    device: {
      mobileS: string;
      mobileM: string;
      mobileL: string;
      tablet: string;
      laptop: string;
      laptopL: string;
      desktop: string;
    };
  }
}
const size = {
  mobileS: "321px",
  mobileM: "376px",
  mobileL: "426px",
  tablet: "769px",
  laptop: "1025px",
  laptopL: "1440px",
  desktop: "2560px",
};

const defaultTheme: DefaultTheme = {
  color: {
    dark: "#000",
    light: "#fff",
    mainD: "#0E93A4",
    mainL: "#63C9D7",
    main: "#22B6CA",
    sec: "#EBFF09",
    secD: "#FFF500",
  },
  font: {
    font1: "'Ruda', sans-serif",
    font2: "'Ruluko', sans-serif",
  },
  fontSize: {
    xs: ".75rem",
    sm: ".875rem",
    tiny: ".875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    xl2: "1.5rem",
    xl3: "1.875rem",
    xl4: "2.25rem",
    xl5: "3rem",
    xl6: "4rem",
    xl7: "5rem",
  },
  device: {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
  },
};

export default defaultTheme;

