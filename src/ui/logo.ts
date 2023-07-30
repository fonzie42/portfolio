import styled from "styled-components";

export const Logo = styled.img`
  height: 12em;
  margin: 2em;
  transition: 0.3s;
  &:hover {
    filter: drop-shadow(0 0 2em ${({ theme }) => theme.accent5});
  }
`;
