import { ACTIONS } from "./actionTypes";

let nextTodoId = 0;

export const addPhrases = content => ({
  type: ACTIONS.ADD_PHRASE,
  payload: {
    content
  }
});
export const concatLastPhrase = content => ({
  type: ACTIONS.CONCAT_LAST_PHRASE,
  payload: {
    content
  }
});
