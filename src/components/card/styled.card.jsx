import styled from "styled-components";
import PropTypes from "prop-types";

import breakpoints from "../../consts/breakpoints";
import colors from "../../consts/colors";

export const Card = styled.div`
  display: flex;
  position: relative;
  flex: ${props => props.flex};
  flex-direction: column;
  height: calc(100vh - 250px);
  margin-bottom: 30px;
  box-sizing: border-box;
  border: 1px solid ${colors.lightGrey};

  @media (max-width: ${breakpoints.mobile}) {
    height: auto;
    min-height: 100px;
  }
`;

Card.propTypes = {
  flex: PropTypes.number
};

Card.defaultProps = {
  flex: 1
};
