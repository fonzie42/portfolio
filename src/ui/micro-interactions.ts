import { css, keyframes } from "styled-components";

const reduceMotion = `@media (prefers-reduced-motion: reduce)`;

export const pressEffect = css`
  &:active {
    transform: scale(0.97);
  }

  ${reduceMotion} {
    &:active {
      transform: none;
    }
  }
`;

export const floatOnHover = css`
  &:hover {
    transform: translateY(-4px);
  }

  ${reduceMotion} {
    &:hover {
      transform: none;
    }
  }
`;

const fadeSlideUpKeyframes = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const scrollReveal = css`
  opacity: 0;
  animation: ${fadeSlideUpKeyframes} 0.5s ease forwards;
  animation-play-state: paused;

  &[data-visible="true"] {
    animation-play-state: running;
  }

  ${reduceMotion} {
    opacity: 1;
    animation: none;
  }
`;

export const copyFlash = keyframes`
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-8px); }
`;
