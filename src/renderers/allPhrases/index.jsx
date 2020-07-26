import React from "react";
import { useSelector } from "react-redux";

import Bubble from "../../components/bubble";

const AllPhrases = () => {
  const displayedSentences = useSelector(state => state.phrases, []);

  return (
    <>
      {displayedSentences.map((sentence, index) => (
        <Bubble key={index} sentence={sentence}></Bubble>
      ))}
    </>
  );
};

export default AllPhrases;
