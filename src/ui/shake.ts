import { keyframes, styled } from "styled-components";

const shake = keyframes`
  35% { transform: rotate(0deg);}
  40% { transform: rotate(5deg);}
  50% { transform: rotate(-5deg);}
  60% { transform: rotate(5deg);}
  65% { transform: rotate(0deg);}
`;

export const Shake = styled.span`
  display: inline-block;
  animation: ${shake} 3s ease-in-out infinite;
  transform-origin: bottom right;
`;
