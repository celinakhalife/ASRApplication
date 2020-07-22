import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./styled.header";

const Header = ({ children }) => {
  return (
    <header>
      <Styled.Title>{children}</Styled.Title>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
