import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import icons from "../../consts/icons";
import IconButton from "../iconButton";
import * as Styled from "./styled.phrase-form";

const PhraseForm = ({
  sentence,
  index,
  defaultEdit,
  updateSpottingPhrase,
  removeSpottingPhrase
}) => {
  const [editMode, setEditMode] = useState(defaultEdit);
  const [spottingPhrase, setSpottingPhrase] = useState(sentence);

  useEffect(() => {
    setSpottingPhrase(sentence);
  }, [sentence]);

  const updateSentence = event => {
    setSpottingPhrase(event.target.value);
  };

  const update = () => {
    updateSpottingPhrase(spottingPhrase, index);
    setEditMode(false);
  };

  const remove = () => {
    removeSpottingPhrase(index);
    setEditMode(false);
  };

  const checkKeyDown = event => {
    if (spottingPhrase && event.key === "Enter") {
      update();
    }
  };

  return (
    <>
      {editMode ? (
        <Styled.Container>
          <IconButton icon={icons.delete} onClick={remove}></IconButton>
          <Styled.Input
            onChange={updateSentence}
            value={spottingPhrase}
            onKeyDown={checkKeyDown}
          ></Styled.Input>
          <IconButton
            icon={icons.check}
            onClick={update}
            disabled={!spottingPhrase}
          ></IconButton>
        </Styled.Container>
      ) : (
        <Styled.Container>
          <IconButton icon={icons.delete} onClick={remove}></IconButton>
          <Styled.Phrase>{sentence}</Styled.Phrase>
          <IconButton
            icon={icons.edit}
            onClick={() => setEditMode(true)}
          ></IconButton>
        </Styled.Container>
      )}
    </>
  );
};

PhraseForm.propTypes = {
  sentence: PropTypes.string,
  index: PropTypes.number,
  defaultEdit: PropTypes.bool,
  updateSpottingPhrase: PropTypes.func,
  removeSpottingPhrase: PropTypes.func,
  addSpottingPhrase: PropTypes.func
};

export default PhraseForm;
