import styled from "styled-components";
import PropTypes from "prop-types";

import colors from "../../consts/colors";

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

export const Card = styled.div`
  display: flex;
  position: relative;
  flex: ${props => props.flex};
  flex-direction: column;
  height: calc(100vh - 250px);
  overflow: scroll;
  margin-bottom: 30px;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid ${colors.lightGrey};
`;

Card.propTypes = {
  flex: PropTypes.number
};

Card.defaultProps = {
  flex: 1
};
