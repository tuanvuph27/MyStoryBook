import { css, keyframes } from '@emotion/core';

const loadEffect = keyframes`
  0% {
    background-position: right;
  }
`;

export default css`
  background-image: linear-gradient(
    103deg,
    transparent 33%,
    rgba(255, 255, 255, 0.6) 50%,
    transparent 66%
  );
  background-size: 300% 100%;
  animation: ${loadEffect} 1.5s infinite;
`;
