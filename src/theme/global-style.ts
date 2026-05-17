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
    padding: 0;
    margin: 16px 0;
  }
  
  h1,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    color: ${({ theme }) => theme.primary};
  }

  p,
  code,
  button {
    color: ${({ theme }) => theme.primaryAlt};
  }

  body {
    background: ${({ theme }) => theme.main};
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.accent};

    &:visited {
      color: ${({ theme }) => theme.accent};
    }

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }


  ::selection {
    color: ${({ theme }) => theme.accent5};
    background: ${({ theme }) => theme.alt2};
  }

  * {
    transition: 0.3s;
  }

  [data-radix-popper-content-wrapper],
  [data-radix-select-content] {
    transition: none !important;
    animation: none !important;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
