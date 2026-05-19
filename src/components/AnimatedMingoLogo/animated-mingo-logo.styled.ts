import styled, { keyframes, css } from "styled-components";

const frameIn = keyframes`
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
`;

const bodyGroupIn = keyframes`
  from { transform: scale(0.9) translateY(10px); }
  to { transform: scale(1) translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const overlayIn = keyframes`
  from { opacity: 0; }
  to { opacity: 0.2; }
`;

const beakIn = keyframes`
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const eyeIn = keyframes`
  0% { opacity: 0; transform: scale(0); }
  70% { opacity: 1; transform: scale(1.4); }
  100% { opacity: 1; transform: scale(1); }
`;

const ornamentLeftIn = keyframes`
  from { opacity: 0; transform: scale(0.6) translateX(10px); }
  to { opacity: 1; transform: scale(1) translateX(0); }
`;

const ornamentRightIn = keyframes`
  from { opacity: 0; transform: scale(0.6) translateX(-10px); }
  to { opacity: 1; transform: scale(1) translateX(0); }
`;

const wave = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.42; }
`;

const hidden = css`
  opacity: 0;
`;

const leafSwayLeft = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-7.5deg); }
  75% { transform: rotate(6deg); }
`;

const leafSwayRight = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(6deg); }
  75% { transform: rotate(-7.5deg); }
`;

const blink = keyframes`
  0%, 11%, 100% { transform: scaleY(1); }
  4% { transform: scaleY(0.1); }
  7% { transform: scaleY(0.1); }
`;

const groupBase = css`
  transform-box: fill-box;
  transform-origin: center;
`;

const animating = css`
  .frame {
    ${hidden}
    ${groupBase}
    animation: ${frameIn} 0.2s ease-out forwards;
  }

  .body {
    ${groupBase}
    animation: ${bodyGroupIn} 0.3s ease-out 0.1s both;
  }

  .body-fill {
    ${hidden}
    animation: ${fadeIn} 0.2s ease-out 0.4s forwards;
  }

  .ring-3 {
    ${hidden}
    animation: ${fadeIn} 0.15s ease-out 0.15s forwards;
  }
  .ring-2 {
    ${hidden}
    animation: ${fadeIn} 0.15s ease-out 0.25s forwards;
  }
  .ring-1 {
    ${hidden}
    animation: ${fadeIn} 0.15s ease-out 0.35s forwards;
  }

  .wave-4 {
    ${hidden}
    animation: ${overlayIn} 0.15s ease-out 0.15s forwards;
  }
  .wave-3 {
    ${hidden}
    animation: ${overlayIn} 0.15s ease-out 0.25s forwards;
  }
  .wave-2 {
    ${hidden}
    animation: ${overlayIn} 0.15s ease-out 0.3s forwards;
  }
  .wave-1 {
    ${hidden}
    animation: ${overlayIn} 0.15s ease-out 0.35s forwards;
  }

  .beak {
    ${hidden}
    ${groupBase}
    animation: ${beakIn} 0.2s ease-out 0.5s forwards;
  }

  .eye {
    ${hidden}
    ${groupBase}
    animation: ${eyeIn} 0.2s ease-out 0.55s forwards;
  }

  .ornament-left {
    ${hidden}
    ${groupBase}
    animation: ${ornamentLeftIn} 0.25s ease-out 0.65s forwards;
  }

  .ornament-right {
    ${hidden}
    ${groupBase}
    animation: ${ornamentRightIn} 0.25s ease-out 0.65s forwards;
  }
`;

const idle = css`
  .body-fill,
  .frame,
  .beak,
  .eye,
  .ornament-left,
  .ornament-right,
  .ring-1,
  .ring-2,
  .ring-3,
  .wave-1,
  .wave-2,
  .wave-3,
  .wave-4 {
    ${hidden}
  }
`;

export const AnimatedSvg = styled.svg<{
  $animate: boolean;
  $wave?: boolean;
  $bodyFirst?: boolean;
}>`
  ${({ $animate }) => ($animate ? animating : idle)}

  ${({ $bodyFirst }) =>
    $bodyFirst &&
    css`
      .body-fill {
        animation: ${fadeIn} 0.2s ease-out 0.15s forwards;
      }
      .wave-4 {
        animation: ${overlayIn} 0.15s ease-out 0.3s forwards;
      }
      .wave-3 {
        animation: ${overlayIn} 0.15s ease-out 0.35s forwards;
      }
      .wave-2 {
        animation: ${overlayIn} 0.15s ease-out 0.4s forwards;
      }
      .wave-1 {
        animation: ${overlayIn} 0.15s ease-out 0.45s forwards;
      }
    `}

  ${({ $wave }) =>
    $wave &&
    css`
      .wave-1 {
        animation:
          ${overlayIn} 0.15s ease-out 0.35s forwards,
          ${wave} 2.5s ease-in-out 1.0s infinite;
      }
      .wave-2 {
        animation:
          ${overlayIn} 0.15s ease-out 0.3s forwards,
          ${wave} 2.5s ease-in-out 0.9s infinite;
      }
      .wave-3 {
        animation:
          ${overlayIn} 0.15s ease-out 0.25s forwards,
          ${wave} 2.5s ease-in-out 0.8s infinite;
      }
      .wave-4 {
        animation:
          ${overlayIn} 0.15s ease-out 0.15s forwards,
          ${wave} 2.5s ease-in-out 0.7s infinite;
      }

      .leaf-left-1,
      .leaf-left-2,
      .leaf-right-1,
      .leaf-right-2 {
        transform-box: fill-box;
        transform-origin: center bottom;
      }
      .leaf-left-1 {
        animation: ${leafSwayLeft} 5s ease-in-out 0.75s infinite;
      }
      .leaf-left-2 {
        animation: ${leafSwayLeft} 5.4s ease-in-out 0.9s infinite;
      }
      .leaf-right-1 {
        animation: ${leafSwayRight} 5.2s ease-in-out 0.8s infinite;
      }
      .leaf-right-2 {
        animation: ${leafSwayRight} 4.8s ease-in-out 0.95s infinite;
      }

      .eye {
        transform-box: fill-box;
        transform-origin: center;
        animation:
          ${eyeIn} 0.2s ease-out 0.55s forwards,
          ${blink} 5.5s ease-in-out 1.5s infinite;
      }
    `}

  @media (prefers-reduced-motion: reduce) {
    .frame,
    .body-fill,
    .beak,
    .eye,
    .ornament-left,
    .ornament-right,
    .ring-1,
    .ring-2,
    .ring-3,
    .leaf-left-1,
    .leaf-left-2,
    .leaf-right-1,
    .leaf-right-2,
    .wave-1,
    .wave-2,
    .wave-3,
    .wave-4 {
      opacity: 1 !important;
      animation: none !important;
      transform: none !important;
    }
  }
`;
