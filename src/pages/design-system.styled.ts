import styled, { css } from "styled-components";
import { media } from "theme/media";

export const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 24px 80px;
  text-align: left;

  ${media.tabletBig`
    padding: 48px 48px 120px;
  `}
`;

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.accent5};
`;

export const BackLink = styled.a`
  font-family: Inter;
  font-size: 14px;
  text-decoration: none;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;

  &:hover {
    opacity: 1;
    color: ${({ theme }) => theme.primaryAlt};
  }
`;

export const Section = styled.section`
  margin-bottom: 64px;

  ${media.tabletBig`
    margin-bottom: 96px;
  `}
`;

export const SectionTitle = styled.h2`
  font-family: Playfair Display;
  font-size: 32px;
  font-weight: 400;
  margin-bottom: 8px;

  ${media.tabletBig`
    font-size: 44px;
  `}
`;

export const SectionDescription = styled.p`
  font-family: Inter;
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.7;
  margin-bottom: 32px;

  ${media.tabletBig`
    font-size: 18px;
    margin-bottom: 48px;
  `}
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.accent5};
  margin: 0 0 32px;
  opacity: 0.4;
`;

export const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 32px;

  ${media.tabletBig`
    gap: 48px;
  `}
`;

export const LogoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const LogoImage = styled.img<{ $size?: string }>`
  height: ${({ $size }) => $size || "120px"};
  transition: 0.3s;

  &:hover {
    filter: drop-shadow(0 0 12px ${({ theme }) => theme.accent5});
  }
`;

export const LogoLabel = styled.span`
  font-family: Inter;
  font-size: 13px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
`;

export const LogoHeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.main};
  border: 1px solid ${({ theme }) => theme.accent5};
  border-radius: 16px;
  padding: 48px;
  margin-bottom: 32px;

  ${media.tabletBig`
    padding: 80px;
    margin-bottom: 48px;
  `}
`;

export const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  ${media.tabletBig`
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  `}
`;

export const ColorSwatch = styled.div<{ $color: string }>``;


export const ColorBlock = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  border-radius: 12px;
  height: 80px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.accent5};

  ${media.tabletBig`
    height: 100px;
  `}
`;

export const ColorMeta = styled.div`
  padding: 8px 4px 0;
`;

export const ColorName = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
`;

export const ColorHex = styled.div`
  font-family: Noto Sans Mono;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
  margin-top: 2px;
`;

export const TypoRow = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  column-gap: 16px;
  align-items: baseline;
  padding: 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.accent5}20;

  ${media.tabletBig`
    grid-template-columns: 80px 1fr;
    column-gap: 32px;
    padding: 24px 0;
  `}
`;

export const TypoLabel = styled.span`
  font-family: Noto Sans Mono;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
  text-transform: uppercase;

  ${media.tabletBig`
    font-size: 14px;
  `}
`;

export const TypoSample = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  & > *:first-child {
    margin: 0;
    padding: 0;
  }
`;

export const TypoSpec = styled.span`
  font-family: Inter;
  font-size: 12px;
  font-style: italic;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
`;

export const TypoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;

  ${media.tabletBig`
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  `}
`;

export const TypoColumnHeader = styled.div`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.accent5};
  margin-bottom: 8px;
`;

export const ButtonGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;

  ${media.tabletBig`
    gap: 24px;
  `}
`;

const ButtonBase = css`
  font-family: Inter;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  &:hover {
    border-color: unset;
  }
  &:focus,
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent3};
    outline-offset: 2px;
  }
`;

export const PrimaryButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 12px 24px;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const SecondaryButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.accent};
  padding: 12px 24px;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.primaryAlt};
    border-color: ${({ theme }) => theme.primaryAlt};
  }
`;

export const OutlineButton = styled.button`
  ${ButtonBase}
  background: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.main};
  padding: 12px 24px;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.main};
  }
`;

export const GhostButton = styled.button`
  ${ButtonBase}
  background: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid transparent;
  padding: 12px 24px;
  font-size: 16px;

  &:hover {
    background: ${({ theme }) => theme.accent5}30;
  }
`;

export const SmallButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 8px 16px;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const LargeButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.primary};
  padding: 16px 32px;
  font-size: 18px;

  &:hover {
    background: ${({ theme }) => theme.accent};
    border-color: ${({ theme }) => theme.accent};
  }
`;

export const DisabledButton = styled.button`
  ${ButtonBase}
  background: ${({ theme }) => theme.accent5};
  color: ${({ theme }) => theme.main};
  border: 2px solid ${({ theme }) => theme.accent5};
  padding: 12px 24px;
  font-size: 16px;
  cursor: not-allowed;
  opacity: 0.5;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ButtonRowLabel = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 16px;
`;

export const ComponentShowcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.accent5}40;
`;

export const ComponentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.accent5}40;
`;

export const ComponentLabel = styled.div`
  font-family: Inter;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  ${media.tabletBig`
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  `}
`;

export const SpacingGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SpacingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SpacingBar = styled.div<{ $width: number }>`
  height: 24px;
  width: ${({ $width }) => $width}px;
  background: ${({ theme }) => theme.accent5};
  border-radius: 4px;
  min-width: 4px;
`;

export const SpacingLabel = styled.span`
  font-family: Noto Sans Mono;
  font-size: 13px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.6;
  white-space: nowrap;
`;

export const SubSection = styled.div`
  margin-top: 40px;
`;

export const SubSectionTitle = styled.h3`
  font-family: Inter;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;

  ${media.tabletBig`
    font-size: 20px;
  `}
`;

export const LinkShowcase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const LinkRow = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;

  ${media.tabletBig`
    gap: 24px;
  `}
`;

export const LinkLabel = styled.span`
  font-family: Noto Sans Mono;
  font-size: 12px;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.5;
  text-transform: uppercase;
  min-width: 64px;

  ${media.tabletBig`
    font-size: 14px;
    min-width: 80px;
  `}
`;

export const LinkSample = styled.a`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;

  ${media.tabletBig`
    font-size: 20px;
  `}
`;

export const LinkDisabled = styled.span`
  font-family: Inter;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.primaryAlt};
  opacity: 0.4;
  text-decoration: underline;
  cursor: not-allowed;

  ${media.tabletBig`
    font-size: 20px;
  `}
`;

export const SampleTextBlock = styled.div`
  padding: 32px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.accent5}40;
  margin-top: 24px;

  ${media.tabletBig`
    padding: 48px;
  `}

  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
