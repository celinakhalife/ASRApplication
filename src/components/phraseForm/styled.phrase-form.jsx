import styled from "styled-components";

import colors from "../../consts/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  color: ${colors.black};
  border: 0px solid;
  border-bottom: 1px solid ${colors.grey};
  font-size: 1rem;
  flex-grow: 1;
  margin: 0 15px;
`;

export const Phrase = styled.span`
  flex-grow: 1;
  padding: 0 15px;
`;
