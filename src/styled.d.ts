import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: "light" | "dark";
    main: string;
    primary: string;
    primaryAlt: string;
    accent: string;
    accent2: string;
    accent3: string;
    accent4: string;
    accent5: string;
    alt: string;
    alt2: string;
  }
}
