import { css } from "styled-components";

const device = {
  tabletBig: "768px",
};

export const media = {
  tabletBig: (...args) => css`
    @media (min-width: ${device.tabletBig}) {
      ${css(...args)};
    }
  `,
};
