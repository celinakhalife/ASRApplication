import { compact } from "lodash";

import { ACTIONS } from "./actionTypes";
import { ASRClient } from "../adapters/asr/ASRClient";
import CONNECTION_STATUS from "../consts/connectionStatus";
import defaultSpottingPhrases from "../consts/defaultSpottingPhrases";

const initialState = {
  phrases: [],
  spottingPhrases: defaultSpottingPhrases,
  asrConnection: new ASRClient("wss://vibe-rc.i2x.ai"),
  connectionStatus: CONNECTION_STATUS.OFFLINE
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_CONNECTION_STATUS: {
      const {
        content: { status }
      } = action;

      return {
        ...state,
        connectionStatus: status
      };
    }

    case ACTIONS.CONNECTION_START: {
      const {
        content: { onMessage }
      } = action;
      const { asrConnection, spottingPhrases } = state;

      asrConnection.start(compact(spottingPhrases), onMessage);
      return {
        ...state,
        connectionStatus: CONNECTION_STATUS.CONNECTING
      };
    }

    case ACTIONS.CONNECTION_STOP: {
      const { asrConnection } = state;
      asrConnection.stop();

      return {
        ...state,
        connectionStatus: CONNECTION_STATUS.DISCONNECTING
      };
    }

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
          spotted.forEach(item => {
            if (phrases[lastIndex].spotted.indexOf(item) === -1)
              phrases[lastIndex].spotted.push(item);
          });

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
      const { spottingPhrases, asrConnection } = state;
      spottingPhrases.push(content);
      asrConnection.updateSpottingConfig(compact(spottingPhrases));
      return {
        ...state,
        spottingPhrases: spottingPhrases
      };
    }

    case ACTIONS.UPDATE_SPOTTING_PHRASE: {
      const { content, index } = action;
      const { spottingPhrases, asrConnection } = state;
      spottingPhrases[index] = content;
      asrConnection.updateSpottingConfig(compact(spottingPhrases));

      return {
        ...state,
        spottingPhrases: spottingPhrases
      };
    }

    case ACTIONS.REMOVE_SPOTTING_PHRASE: {
      const { index } = action;
      const { spottingPhrases, asrConnection } = state;
      spottingPhrases.splice(index, 1);
      asrConnection.updateSpottingConfig(compact(spottingPhrases));

      return {
        ...state,
        spottingPhrases: spottingPhrases
      };
    }
    default:
      return state;
  }
}
