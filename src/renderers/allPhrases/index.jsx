import React, { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import Card from "../../components/card";
import Bubble from "../../components/bubble";

const AllPhrases = () => {
  const displayedSentences = useSelector(state => state.phrases, []);
  const element = useRef(null);
  useEffect(() => {
    if (element && element.current) {
      element.current.scrollTo({
        top: element.current.scrollHeight,
        left: 0,
        behavior: "smooth"
      });
    }
  });

  return (
    <Card flex={2} reference={element}>
      {displayedSentences.map((sentence, index) => (
        <Bubble key={index} sentence={sentence}></Bubble>
      ))}
    </Card>
  );
};

export default AllPhrases;
