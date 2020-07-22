import styled from "styled-components";

import colors from "../../consts/colors";

export const Button = styled.button`
  padding: 15px 30px;
  background: ${colors.grey};
  color: ${colors.white};
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 2px 2px #dcdcdc;
  transition: box-shadow 0.1s ease, transform 0.1s ease,
    background-color 0.2s ease;
  &:disabled {
    cursor: initial;
    background: ${colors.lightGrey};
  }
  :hover {
    box-shadow: 0px 0px ${colors.shadowGrey};
    transform: translate(2px, 2px);
  }
  :active {
    transform: translate(3px, 3px);
  }
`;
