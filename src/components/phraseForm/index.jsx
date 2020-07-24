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
  };

  const checkKeyDown = event => {
    if (event.key === "Enter") {
      update();
    }
  };

  return (
    <>
      {editMode ? (
        <Styled.Container>
          <Styled.Input
            onChange={updateSentence}
            value={spottingPhrase}
            onKeyDown={checkKeyDown}
          ></Styled.Input>
          <div>
            <IconButton icon={icons.check} onClick={update}></IconButton>
            <IconButton icon={icons.delete} onClick={remove}></IconButton>
          </div>
        </Styled.Container>
      ) : (
        <Styled.Container>
          <span>{sentence}</span>
          <div>
            <IconButton
              icon={icons.edit}
              onClick={() => setEditMode(true)}
            ></IconButton>
            <IconButton icon={icons.delete} onClick={remove}></IconButton>
          </div>
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
