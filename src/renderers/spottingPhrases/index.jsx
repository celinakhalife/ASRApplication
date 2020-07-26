import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { ACTIONS } from "../../redux/actionTypes";
import Card from "../../components/card";
import PhraseForm from "../../components/phraseForm";
import IconButton from "../../components/iconButton";
import icons from "../../consts/icons";

import * as Styled from "./styled.spotting-phrases";

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

  const hasEmptyRow = spottingSentences.filter(item => !item).length > 0;
  return (
    <Card>
      <Styled.Header>
        <Styled.Title>Spotting Phrases</Styled.Title>
        {!hasEmptyRow && (
          <IconButton icon={icons.add} onClick={addEmptyPhrase}></IconButton>
        )}
      </Styled.Header>
      <Styled.Container>
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
      </Styled.Container>
    </Card>
  );
};

export default SpottingPhrases;
