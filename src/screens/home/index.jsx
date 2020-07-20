import React, { useState } from "react";
import { ASRClient } from "../../utils/asr/ASRClient";
import { compact } from "lodash";

const ASRInstance = new ASRClient("wss://vibe-rc.i2x.ai");

export const Home = () => {
  const [started, setStarted] = useState(false);
  const [phrases, setPhrases] = useState([
    "product",
    "Hi",
    "Hello",
    "My name is"
  ]);
  const [log, setLog] = useState("");
  const _startSession = () => {
    setStarted(true);
    ASRInstance.start(compact(phrases), _onMessage);
  };

  const _stopSession = () => {
    setStarted(false);
    ASRInstance.stop();
  };

  const _onToggle = () => {
    if (started) {
      _stopSession();
    } else {
      _startSession();
    }
  };

  const _onUpdatePhrases = event => {
    const nextPhrases = event.target.value.split("\n");
    if (ASRInstance.isStarted()) {
      ASRInstance.updateSpottingConfig(compact(nextPhrases));
    }
    setPhrases(phrases);
  };

  const _onMessage = (error, results) => {
    setLog(log + "\n" + JSON.stringify(results, null, 2));
  };

  return (
    <>
      <div>
        <button onClick={_onToggle}>{started ? "Stop" : "Start"}</button>
      </div>
      <div>
        <textarea
          onChange={_onUpdatePhrases}
          value={phrases.join("\n")}
          cols="30"
          rows="10"
        />
      </div>
      <div
        style={{ height: 600, overflowY: "auto", border: "1px solid black" }}
      >
        <pre>{log}</pre>
      </div>
    </>
  );
};
