Server for hookwebsocket.js

use `node server.js` to start the server

```js
var app = require("express")();
var server = require("http").Server(app);
var WebSocket = require("ws");

var wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", function connection(ws) {
  console.log("server: receive connection.");

  ws.on("message", function incoming(message) {
    console.log("server: received %s", message);
    ws.send("server: reply");
  });

  let cnt = 0;
  setInterval(() => {
    const nowTime = new Date().toLocaleTimeString();
    ws.send(
      JSON.stringify({
        time: nowTime,
        value: Math.random(),
      })
    );
  }, 2000);
});
```
