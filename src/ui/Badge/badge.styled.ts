import styled, { css } from "styled-components";

const BadgeBaseStyles = css`
  border-radius: 16px;
  background: ${({ theme }) => theme.accent5};
  color: ${({ theme }) => theme.primary};
  display: inline-block;
  padding: 6px 12px;
  font-size: 16px;
  border: 2px solid transparent;
  line-height: 1;
  margin: 2px;
  font-weight: 400;
`;

export const BadgeWrapper = styled.div`
  ${BadgeBaseStyles}
`;

export const BadgeButtonWrapper = styled.button`
  ${BadgeBaseStyles}

  &:hover {
    border: 2px solid;
    border-color: ${({ theme }) => theme.primary};
  }

  &:focus {
    outline: solid 2px ${({ theme }) => theme.accent2};
  }
`;
