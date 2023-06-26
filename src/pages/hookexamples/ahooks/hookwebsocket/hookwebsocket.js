import React, { useRef, useMemo } from "react";
// import { useWebSocket } from "ahooks";
import { useWebSocket } from "./myUseWS";
import { ReadyState } from "./types";

// TODO 不知道为什么，在nextjs里，页面不能叫index.js
export default function WebSocketExample() {
  const messageHistory = useRef([]);

  const { readyState, sendMessage, latestMessage, disconnect, connect } =
    //  =  useWebSocket("ws://localhost:8080");
    useWebSocket("");

  messageHistory.current = useMemo(() => {
    console.log("🎈", latestMessage);
    return messageHistory.current.concat(latestMessage);
  }, [latestMessage]);

  return (
    <div>
      {/* send message */}
      <button
        onClick={() => sendMessage && sendMessage(`${Date.now()}`)}
        disabled={readyState !== ReadyState.Open}
        style={{ marginRight: 8 }}
      >
        ✉️ send
      </button>
      {/* disconnect */}
      <button
        onClick={() => disconnect && disconnect()}
        disabled={readyState !== ReadyState.Open}
        style={{ marginRight: 8 }}
      >
        ❌ disconnect
      </button>
      {/* connect */}
      <button
        onClick={() => connect && connect()}
        disabled={readyState === ReadyState.Open}
      >
        {readyState === ReadyState.Connecting ? "connecting" : "📞 connect"}
      </button>
      <div style={{ marginTop: 8 }}>readyState: {readyState}</div>
      <div style={{ marginTop: 8 }}>
        <p>received message: </p>
        {messageHistory.current.map((message, index) => (
          <p key={index} style={{ wordWrap: "break-word" }}>
            {message?.data}
          </p>
        ))}
      </div>
    </div>
  );
}
