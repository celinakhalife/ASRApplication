import React from "react";
import PropTypes from "prop-types";
import sanitizeHtml from "sanitize-html";
import { replace } from "lodash";

import * as Styled from "./styled.bubble";

const Bubble = ({ sentence }) => {
  let phrase = sentence.phrase;
  sentence.spotted.forEach(
    spotted =>
      (phrase = replace(phrase.toLowerCase(), spotted, `<b>${spotted}</b>`))
  );
  return (
    <Styled.Bubble
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(phrase, {
          allowedTags: ["b"]
        })
      }}
    ></Styled.Bubble>
  );
};

Bubble.propTypes = {
  sentence: PropTypes.shape({
    phrase: PropTypes.string,
    timestamp: PropTypes.number
  })
};

export default Bubble;
