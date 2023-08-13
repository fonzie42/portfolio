import styled from "styled-components";

export const BadgeWrapper = styled.div`
  border-radius: 16px;
  background: ${({ theme }) => theme.accent5};
  color: ${({ theme }) => theme.primary};
  display: inline-block;
  padding: 6px 12px;
  font-size: 16px;
`;
