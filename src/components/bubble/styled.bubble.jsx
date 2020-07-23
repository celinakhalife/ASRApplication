import styled from "styled-components";

import colors from "../../consts/colors";

export const Bubble = styled.div`
  flex: 1;
  padding: 25px;
  background: ${colors.lightGrey};
  color: ${colors.black};
  border-radius: 5px;
  margin-bottom: 15px;
  position: relative;
  margin-right: 7px;
  &:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 100%;
    border-top: 7px solid transparent;
    border-left: 7px solid ${colors.lightGrey};
    border-right: 7px solid transparent;
    border-bottom: 7px solid transparent;
  }
`;
