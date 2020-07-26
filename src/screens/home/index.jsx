import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ACTIONS } from "../../redux/actionTypes";
import CONNECTION_STATUS from "../../consts/connectionStatus";
import Header from "../../components/header";
import Button from "../../components/button";
import AllPhrases from "../../renderers/allPhrases";
import SpottingPhrases from "../../renderers/spottingPhrases";
import * as Styled from "./styled.home";

export const Home = () => {
  const dispatch = useDispatch();
  const connectionStatus = useSelector(state => state.connectionStatus, "");
  const asrConnection = useSelector(state => state.asrConnection, null);

  useEffect(() => {
    if (asrConnection) {
      asrConnection.onConnect = () => {
        dispatch({
          type: ACTIONS.UPDATE_CONNECTION_STATUS,
          content: { status: CONNECTION_STATUS.ONLINE }
        });
      };
      asrConnection.onClose = () => {
        dispatch({
          type: ACTIONS.UPDATE_CONNECTION_STATUS,
          content: { status: CONNECTION_STATUS.OFFLINE }
        });
      };
    }
    // eslint-disable-next-line
  }, [asrConnection]);

  const startSession = () => {
    dispatch({
      type: ACTIONS.CONNECTION_START,
      content: { onMessage: onMessage }
    });
  };

  const stopSession = () => {
    dispatch({
      type: ACTIONS.CONNECTION_STOP
    });
  };

  const onMessage = (error, results) => {
    if (!error) {
      const {
        transcript: { utterance },
        spotted
      } = results;
      dispatch({
        type: ACTIONS.ADD_PHRASE,
        content: { phrase: utterance, spotted: spotted }
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
      <Styled.Container flexDirection="row" flexGrow="1">
        <AllPhrases />
        <SpottingPhrases />
      </Styled.Container>

      <Button disabled={disabledButton} onClick={handleButtonClick}>
        {buttonLabel}
      </Button>
    </Styled.Main>
  );
};
