import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./styled.button";

const IconButton = ({ icon, ...props }) => {
  return <Styled.IconButton icon={icon} {...props}></Styled.IconButton>;
};

IconButton.propTypes = {
  icon: PropTypes.string
};

export default IconButton;
