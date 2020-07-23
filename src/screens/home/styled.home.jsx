import styled from "styled-components";
import PropTypes from "prop-types";

const flexDirectionType = PropTypes.oneOf(["row", "column"]);
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
  flexDirection: flexDirectionType
};

Container.defaultProps = {
  flexDirection: "column"
};

export const Column = styled.div`
  display: flex;
  flex: ${props => props.flex};
  flex-direction: ${props => props.flexDirection};
`;

Column.propTypes = {
  flex: PropTypes.number,
  flexDirection: flexDirectionType
};

Column.defaultProps = {
  flex: 1,
  flexDirection: "row"
};
