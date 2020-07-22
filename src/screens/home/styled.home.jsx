import styled from "styled-components";
import PropTypes from "prop-types";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
`;

Container.propTypes = {
  flexDirection: PropTypes.oneOf(["row", "column"])
};

Container.defaultProps = {
  flexDirection: "column"
};

export const Column = styled.div`
  display: flex;
  flex: ${props => props.flex};
`;

Column.propTypes = {
  flex: PropTypes.number
};

Column.defaultProps = {
  flex: 1
};
