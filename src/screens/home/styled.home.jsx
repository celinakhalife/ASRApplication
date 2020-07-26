import styled from "styled-components";
import PropTypes from "prop-types";

import breakpoints from "../../consts/breakpoints";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: ${props => props.flexGrow};
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column-reverse;
  }
`;

Container.propTypes = {
  flexGrow: PropTypes.string
};

Container.defaultProps = {
  flexDirection: "column"
};
