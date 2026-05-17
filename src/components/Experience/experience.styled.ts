import styled from "styled-components";
import { media } from "theme/media";

export const ExperienceCard = styled.div<{ $expanded: boolean }>`
  border: 2px solid ${({ theme }) => theme.accent5};
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 48px;
  transition: border-color 0.2s, background 0.3s;
  background: ${({ $expanded, theme }) =>
    $expanded ? theme.accent5 + "20" : "transparent"};

  &:hover {
    border-color: ${({ theme }) => theme.accent3};
  }
`;

export const ExperienceHeaderRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;

  ${media.tabletBig`
    padding: 32px;
    gap: 16px;
  `}
`;

export const ExperienceHeader = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ExperienceMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

export const ExperienceTags = styled.div`
  margin-top: 12px;
`;

export const Chevron = styled.button<{ $expanded: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  margin-top: 4px;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.accent5};
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease, background 0.2s;
  transform: rotate(${({ $expanded }) => ($expanded ? "180deg" : "0deg")});

  &:hover {
    background: ${({ theme }) => theme.accent3};
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid ${({ theme }) => theme.primaryAlt};
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

export const ExperienceContent = styled.div`
  padding: 0 16px 16px;

  ${media.tabletBig`
    padding: 0 32px 32px;
  `}
`;
