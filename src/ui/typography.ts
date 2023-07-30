import styled, { css } from "styled-components";
import { media } from "../theme/media";
import { getRGBA } from "./colors";

type TypographyColors = "primary" | "primary-alt" | "alt";

interface TypographyProps {
  color?: TypographyColors;
}

const getStyleForColor = (color: TypographyColors) => {
  const availableColors = {
    primary: css`
      color: ${({ theme }) => theme.primary};
    `,
    "primary-alt": css`'
      color: ${({ theme }) => theme.primaryAlt};
    `,
    alt: css`'
      color: ${getRGBA.primaryAlt(0.5)};
    `,
  };

  return availableColors[color];
};

export const TypographyWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  column-gap: 32px;
  text-align: left;
  margin-top: 32px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Subtitle = styled.p<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Inter;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 25px;
`;

export const Header0 = styled.h1<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Playfair Display;
  font-size: 64px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;

  ${media.tabletBig`
      font-size: 130px;
      font-weight: 900;
      line-height: 143px;
  `}
`;

export const Header1 = styled.h1<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Inter;
  line-height: normal;
  font-size: 38px;

  ${media.tabletBig`
    line-height: 86px;
    font-size: 72px;
  `}
`;

export const Header2 = styled.h2<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Playfair Display;

  font-weight: 400;
  font-size: 32px;
  line-height: 36px;

  ${media.tabletBig`
  font-size: 58px;
  line-height: 70px;
  `}
`;

export const Header3 = styled.h3<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Playfair Display;

  font-weight: 400;
  font-size: 30px;
  line-height: normal;

  ${media.tabletBig`

    line-height: 57px;
  font-size: 44px;
  `}
`;

export const Header4 = styled.h4<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Playfair Display;
  font-size: 24px;
  line-height: 36px;
  font-weight: 400;

  ${media.tabletBig`
    font-size: 36px;
    line-height: 52px;
  `}
`;

export const Header5 = styled.h5<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Playfair Display;
  font-weight: 400;
  font-size: 24px;
  line-height: normal;

  ${media.tabletBig`
    font-size: 30px;
    line-height: 39px;
  `}
`;

export const Header6 = styled.h6<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Playfair Display;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  ${media.tabletBig`
    font-size: 14px;
    line-height: 25px;
  `}
`;

export const Paragraph = styled.p<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Inter;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  ${media.tabletBig`
    line-height: 44px;    
    font-size: 22px;
  `}
`;

export const Code = styled.code<TypographyProps>`
  ${({ color }) => color && getStyleForColor(color)}

  font-family: Noto Sans Mono;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;

  ${media.tabletBig`
    font-size: 22px;
    line-height: 44px;
  `}
`;

export const Button = styled.button`
  font-family: Inter;
  font-size: 24px;
  font-weight: 500;
  line-height: 36px;
`;

export const Description = styled(Header3)`
  align-items: center;
  display: flex;
`;
