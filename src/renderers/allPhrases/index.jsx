import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import icons from "../../consts/icons";
import Card from "../../components/card";
import Bubble from "../../components/bubble";
import isScrollEnd from "../../utils/isScrollEnd";
import scrollToEnd from "../../utils/scrollToEnd";

import * as Styled from "./styled.all-phrases";

const AllPhrases = () => {
  const displayedSentences = useSelector(state => state.phrases, []);
  const [allowScroll, setAllowScroll] = useState(true);
  const element = useRef(null);

  useEffect(() => {
    if (allowScroll) scrollToEnd(element);
  });

  const handleOnScroll = () => {
    setAllowScroll(isScrollEnd(element));
  };

  return (
    <Card flex={2}>
      <Styled.Container ref={element} onScroll={handleOnScroll}>
        {displayedSentences.map((sentence, index) => (
          <Bubble key={index} sentence={sentence}></Bubble>
        ))}
      </Styled.Container>

      <Styled.ArrowButton
        show={!allowScroll}
        icon={icons.arrow}
        onClick={() => {
          scrollToEnd(element);
        }}
      />
    </Card>
  );
};

export default AllPhrases;
