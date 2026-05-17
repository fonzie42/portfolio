/* eslint-disable */
import { css } from "styled-components";

export const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1024px",
  wide: "1440px",
};

export const media = {
  mobile: (...args: any) => css`
    @media (min-width: ${breakpoints.mobile}) {
      ${css`${args}`};
    }
  `,
  tablet: (...args: any) => css`
    @media (min-width: ${breakpoints.tablet}) {
      ${css`${args}`};
    }
  `,
  tabletBig: (...args: any) => css`
    @media (min-width: ${breakpoints.tablet}) {
      ${css`${args}`};
    }
  `,
  desktop: (...args: any) => css`
    @media (min-width: ${breakpoints.desktop}) {
      ${css`${args}`};
    }
  `,
  wide: (...args: any) => css`
    @media (min-width: ${breakpoints.wide}) {
      ${css`${args}`};
    }
  `,
};
