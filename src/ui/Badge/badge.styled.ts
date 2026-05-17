import styled, { css } from "styled-components";

const BadgeBaseStyles = css`
  border-radius: 16px;
  color: ${({ theme }) => theme.main};
  background: ${({ theme }) => theme.accent4};
  display: inline-block;
  padding: 6px 12px;
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.accent4};
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
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.accent : theme.accent3};
    border-color: ${({ theme }) =>
      theme.mode === "dark" ? theme.alt2 : theme.primary};
  }

  &:focus {
    outline: solid 2px ${({ theme }) => theme.accent2};
  }
`;
