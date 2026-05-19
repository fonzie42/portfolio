import styled, { css, keyframes } from "styled-components";
import { media } from "theme/media";
import { getRGBA } from "ui/colors";
import { Paragraph, Subtitle } from "ui/typography";

const tagFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CardRevealWrapper = styled.div<{ $visible: boolean }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? "0" : "20px")});
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin-bottom: 20px;

  ${media.tabletBig`
    margin-bottom: 28px;
  `}

  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

export const ExperienceCard = styled.div<{ $expanded: boolean }>`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: ${({ $expanded, theme }) =>
    $expanded ? `${theme.accent5}0A` : "transparent"};
  box-shadow: 0 1px 8px ${getRGBA.primaryAlt(0.06)};
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.3s ease;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: linear-gradient(
      to bottom,
      ${({ theme }) => theme.accent3},
      ${({ theme }) => theme.accent5}
    );
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px ${getRGBA.primaryAlt(0.1)};
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

export const ExperienceHeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 20px 20px 16px;
  cursor: pointer;

  ${media.tabletBig`
    padding: 28px 32px 20px;
    gap: 16px;
  `}
`;

export const ExperienceHeader = styled.div`
  flex: 1;
  min-width: 0;
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  margin: 12px 0 16px;
`;

export const Period = styled(Subtitle)`
  margin: 0;
  color: ${({ theme }) => theme.accent3};
`;

export const Duration = styled(Subtitle)`
  margin: 0;
  color: ${({ theme }) => theme.accent3};
`;

export const ExperienceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  margin-top: 12px;
`;

export const TagItem = styled.span<{ $isNew: boolean; $delay: number }>`
  display: inline-flex;

  ${({ $isNew, $delay }) =>
    $isNew &&
    css`
      animation: ${tagFadeIn} 0.3s ease ${$delay}ms both;

      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `}
`;

export const MoreTagsBadge = styled.span`
  display: inline-flex;
  align-items: center;
  border-radius: 16px;
  color: ${({ theme }) => theme.accent3};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.accent4};
  padding: 6px 12px;
  font-family: Inter, sans-serif;
  font-size: 16px;
  line-height: 1;
  font-weight: 500;
  margin: 2px;
`;

export const Chevron = styled.button<{ $expanded: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  margin-top: 4px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => `${theme.accent5}33`};
  color: ${({ theme }) => theme.primaryAlt};
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease, background 0.2s ease;
  transform: rotate(${({ $expanded }) => ($expanded ? "180deg" : "0deg")});

  &:hover {
    background: ${({ theme }) => theme.accent5};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.accent2};
    outline-offset: 2px;
  }
`;

export const ExperienceBody = styled.div<{ $expanded: boolean }>`
  display: grid;
  grid-template-rows: ${({ $expanded }) => ($expanded ? "1fr" : "0fr")};
  transition: grid-template-rows 0.35s ease;
`;

export const ExperienceBodyInner = styled.div`
  overflow: hidden;
`;

export const ExperienceContent = styled.div<{ $expanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 20px 24px;
  opacity: ${({ $expanded }) => ($expanded ? 1 : 0)};
  transform: translateY(${({ $expanded }) => ($expanded ? "0" : "8px")});
  transition: opacity 0.3s ease 0.12s, transform 0.3s ease 0.12s;

  ${media.tabletBig`
    padding: 4px 32px 32px;
  `}

  @media (prefers-reduced-motion: reduce) {
    transform: none;
    transition: opacity 0.15s ease;
  }
`;

export const CardParagraph = styled(Paragraph)`
  text-align: left;
  margin: 0;
`;

export const ShortText = styled(CardParagraph)`
  margin-top: 24px;
`;
