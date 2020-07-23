import React, { useState, useEffect } from "react";
import { compact } from "lodash";
import { useSelector, useDispatch } from "react-redux";

import { ASRClient } from "../../utils/asr/ASRClient";
import { ACTIONS } from "../../redux/actionTypes";
import CONNECTION_STATUS from "../../consts/connectionStatus";
import Header from "../../components/header";
import Button from "../../components/button";
import Bubble from "../../components/bubble";

import * as Styled from "./styled.home";

const ASRInstance = new ASRClient("wss://vibe-rc.i2x.ai");

export const Home = () => {
  const dispatch = useDispatch();
  const displayedSentences = useSelector(state => state.phrases, []);
  const spottingSentences = useSelector(state => state.spottingPhrases, []);

  const [connectionStatus, setConnectionStatus] = useState(
    CONNECTION_STATUS.OFFLINE
  );

  useEffect(() => {
    ASRInstance.onConnect = () => {
      setConnectionStatus(CONNECTION_STATUS.ONLINE);
    };
    ASRInstance.onClose = () => {
      setConnectionStatus(CONNECTION_STATUS.OFFLINE);
    };
  }, []);

  const startSession = () => {
    setConnectionStatus(CONNECTION_STATUS.CONNECTING);
    ASRInstance.start(compact(spottingSentences), onMessage);
  };

  const stopSession = () => {
    setConnectionStatus(CONNECTION_STATUS.DISCONNECTING);
    ASRInstance.stop();
  };

  const onMessage = (error, results) => {
    if (!error) {
      const {
        transcript: { utterance }
      } = results;

      dispatch({
        type: ACTIONS.ADD_PHRASE,
        content: utterance
      });
    }
  };

  const disabledButton =
    connectionStatus === CONNECTION_STATUS.CONNECTING ||
    connectionStatus === CONNECTION_STATUS.DISCONNECTING;

  let buttonLabel = "";
  switch (connectionStatus) {
    case CONNECTION_STATUS.OFFLINE:
      buttonLabel = "Start";
      break;
    case CONNECTION_STATUS.ONLINE:
      buttonLabel = "Stop";
      break;
    default:
      buttonLabel = "Loading";
      break;
  }

  const handleButtonClick = () => {
    switch (connectionStatus) {
      case CONNECTION_STATUS.OFFLINE:
        startSession();
        break;
      case CONNECTION_STATUS.ONLINE:
        stopSession();
        break;
      default:
        break;
    }
  };

  return (
    <Styled.Main>
      <Header>Status: {connectionStatus}</Header>
      <Styled.Container flexDirection="row">
        <Styled.Column flex={2} flexDirection="column">
          {displayedSentences.map((sentence, index) => (
            <Bubble key={index} sentence={sentence}></Bubble>
          ))}
        </Styled.Column>
        <Styled.Column></Styled.Column>
      </Styled.Container>

      <Button disabled={disabledButton} onClick={handleButtonClick}>
        {buttonLabel}
      </Button>
    </Styled.Main>
  );
};
