import { ACTIONS } from "./actionTypes";
import defaultSpottingPhrases from "../consts/defaultSpottingPhrases";

const initialState = {
  phrases: [],
  spottingPhrases: defaultSpottingPhrases
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_PHRASE: {
      const {
        content: { phrase, spotted }
      } = action;
      const { phrases } = state;
      const timestamp = new Date().getTime();

      if (phrases.length > 0) {
        const lastIndex = phrases.length - 1;
        const timeDifference = timestamp - phrases[lastIndex].timestamp;
        if (timeDifference < 2000) {
          phrases[lastIndex].phrase = `${phrases[lastIndex].phrase} ${phrase}`;
          phrases[lastIndex].spotted.push(spotted);

          return {
            ...state,
            phrases: phrases
          };
        }
      }
      phrases.push({ phrase: phrase, spotted: spotted, timestamp: timestamp });
      return {
        ...state,
        phrases: phrases
      };
    }
    case ACTIONS.ADD_SPOTTING_PHRASE: {
      const { content } = action;
      const { spottingPhrases } = state;
      spottingPhrases.push(content);

      return {
        ...state,
        spottingPhrases: spottingPhrases
      };
    }
    case ACTIONS.UPDATE_SPOTTING_PHRASE: {
      const { content, index } = action;
      const { spottingPhrases } = state;
      spottingPhrases[index] = content;

      return {
        ...state,
        spottingPhrases: spottingPhrases
      };
    }
    case ACTIONS.REMOVE_SPOTTING_PHRASE: {
      const { index } = action;
      const { spottingPhrases } = state;
      spottingPhrases.splice(index, 1);

      return {
        ...state,
        spottingPhrases: spottingPhrases
      };
    }
    default:
      return state;
  }
}
