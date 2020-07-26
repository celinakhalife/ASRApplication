import styled from "styled-components";

import colors from "../../consts/colors";

export const Header = styled.div`
  background: ${colors.white};
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  height: 25px;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${colors.lightGrey};
`;

export const Title = styled.h2`
  font-size: 1rem;
  color: ${colors.grey};
`;

export const Container = styled.div`
  height: 100%;
  overflow: auto;
  padding: 30px 0;
`;
