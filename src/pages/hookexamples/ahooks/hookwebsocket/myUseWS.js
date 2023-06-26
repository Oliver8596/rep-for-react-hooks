/* eslint-disable spellcheck/spell-checker */
import { useState, useRef } from "react";
import { ReadyState } from "./types";

export const useWebSocket = (path) => {
  const [ws, setWs] = useState(null);
  const [latestMessage, setLatestMessage] = useState(JSON.stringify({}));
  const [readyState, setReadyState] = useState(ReadyState.Closed);

  if (ws) {
    ws.onopen = function () {
      setReadyState(ReadyState.Open);
      console.log("client: ws connection is open");
    };
    ws.onmessage = function (e) {
      setLatestMessage(e.data);
    };
  }

  const connect = function () {
    setReadyState(ReadyState.Connecting);
    setWs(new WebSocket(`ws://localhost:8080/${path}`));
  };

  const disconnect = function () {
    if (ws && readyState === ReadyState.Open) {
      setReadyState(ReadyState.Closing);
      ws.close();
      setReadyState(ReadyState.Closed);
    } else if (ws) {
      console.log("disconnect failed because webSocket is not in open state");
    }
    console.log("client: ws connection is closed");
  };

  const sendMessage = function (message) {
    let m = message;
    if (message instanceof Object) {
      m = JSON.stringify(m);
    }
    if (ws && readyState === ReadyState.Open) {
      ws.send(m);
    }
  };

  return {
    connect,
    disconnect,
    latestMessage,
    sendMessage,
    readyState,
  };
};
