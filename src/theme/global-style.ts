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
    color: ${({ theme }) => theme.alt};
    
    &:hover {
      color: ${({ theme }) => theme.accent5};
    }
  }


  ::selection {
    color: ${({ theme }) => theme.accent5};
    background: ${({ theme }) => theme.alt2};
  }

  * {
    transition: 0.3s;
  }
`;
