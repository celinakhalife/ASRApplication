import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ACTIONS } from "../../redux/actionTypes";
import PhraseForm from "../../components/phraseForm";
import IconButton from "../../components/iconButton";
import icons from "../../consts/icons";

const SpottingPhrases = () => {
  const dispatch = useDispatch();
  const spottingSentences = useSelector(state => state.spottingPhrases, []);

  const updateSpottingPhrase = (spottingPhrase, index) => {
    dispatch({
      type: ACTIONS.UPDATE_SPOTTING_PHRASE,
      content: spottingPhrase,
      index: index
    });
  };

  const removeSpottingPhrase = index => {
    dispatch({
      type: ACTIONS.REMOVE_SPOTTING_PHRASE,
      index: index
    });
  };

  const addEmptyPhrase = () => {
    dispatch({
      type: ACTIONS.ADD_SPOTTING_PHRASE,
      content: ""
    });
  };
  return (
    <>
      {spottingSentences.map((sentence, index) => (
        <PhraseForm
          key={index}
          index={index}
          sentence={sentence}
          defaultEdit={!sentence}
          updateSpottingPhrase={updateSpottingPhrase}
          removeSpottingPhrase={removeSpottingPhrase}
        ></PhraseForm>
      ))}
      <IconButton icon={icons.add} onClick={addEmptyPhrase}></IconButton>
    </>
  );
};

export default SpottingPhrases;
