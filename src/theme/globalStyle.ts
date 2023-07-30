import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  p,
  h1,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  code,
  button {
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.primary};
  }

  body {
    background: ${({ theme }) => theme.main};
  }

  ::selection {
    color: ${({ theme }) => theme.accent5};
    background: ${({ theme }) => theme.alt2};
  }

  * {
    transition: 0.3s;
  }
`;
