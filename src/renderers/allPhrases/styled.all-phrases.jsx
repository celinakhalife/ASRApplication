import styled, { keyframes, css } from "styled-components";

import IconButton from "../../components/iconButton";

const arrowButtonAnimation = keyframes`
  0% {
    transform: translate(-50%,0);
  }
  50% {
    transform: translate(-50%,-5px);
   }
  100% {
    transform: translate(-50%,0);
   }
`;

export const Container = styled.div`
  height: 100%;
  overflow: auto;
  padding: 15px 15px 0 15px;
`;

export const ArrowButton = styled(IconButton)`
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease;
  animation: ${arrowButtonAnimation} 1s ease infinite;
  border-radius: 50%;
  ${props =>
    props.show &&
    css`
        visibility: visible;
        opacity: 0.8;
        :hover {
          opacity: 1;
          animation-play-state: paused;
      `}
   
  }
`;
