import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./styled.card";

const Card = ({ children, reference }) => {
  return <Styled.Card ref={reference}> {children}</Styled.Card>;
};

Card.propTypes = {
  children: PropTypes.node,
  reference: PropTypes.object
};

export default Card;
