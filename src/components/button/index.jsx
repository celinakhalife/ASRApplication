import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./styled.button";

const Button = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
