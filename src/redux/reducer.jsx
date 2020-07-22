import { ACTIONS } from "./actionTypes";

const initialState = {
  phrases: [],
  spottingPhrases: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD_PHRASE: {
      const { content } = action;
      const { phrases } = state;
      const timestamp = new Date().getTime();

      if (phrases.length > 0) {
        const lastIndex = phrases.length - 1;
        const timeDifference = timestamp - phrases[lastIndex].timestamp;
        if (timeDifference < 2000) {
          phrases[lastIndex].phrase = `${phrases[lastIndex].phrase} ${content}`;

          return {
            ...state,
            phrases: phrases
          };
        }
      }
      phrases.push({ phrase: content, timestamp: timestamp });
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