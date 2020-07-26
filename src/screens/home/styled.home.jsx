import styled from "styled-components";
import PropTypes from "prop-types";

const flexDirectionType = PropTypes.oneOf(["row", "column"]);
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 50px;
  max-width: 800px;
  margin: 0 auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => props.flexGrow};
`;

Container.propTypes = {
  flexDirection: flexDirectionType,
  flexGrow: PropTypes.string
};

Container.defaultProps = {
  flexDirection: "column"
};
