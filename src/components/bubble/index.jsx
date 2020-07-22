import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./styled.bubble";

const Bubble = ({ sentence }) => {
  console.log(sentence);
  return <Styled.Bubble>{sentence.phrase}</Styled.Bubble>;
};

Bubble.propTypes = {
  sentence: PropTypes.shape({
    phrase: PropTypes.string,
    timestamp: PropTypes.object
  })
};

export default Bubble;
