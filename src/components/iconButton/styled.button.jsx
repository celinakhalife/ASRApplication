import styled from "styled-components";

export const IconButton = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;
  transition: transform 0.2s ease;
  cursor: pointer;
  background-color: transparent;
  background-image: ${props => `url(${props.icon})`};
  :hover {
    transform: scale(1.1);
  }
`;
