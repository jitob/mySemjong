const app = require("express");
const mqtt = require("mqtt");
const EventEmitter = require("events");
const client = mqtt.connect("mqtt://broker.hivemq.com");
const http = require("http").createServer(app);
const emitter = new EventEmitter();
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  client.subscribe("TF116");
  client.subscribe("TF64");
  client.subscribe("TF120");
  client.subscribe("TF113");
  client.subscribe("TF114");
  client.subscribe("TF115");
  client.subscribe("TF118");
  client.subscribe("TF112");

  client.subscribe("FR116");
  client.subscribe("FR64");
  client.subscribe("FR120");
  client.subscribe("FR113");
  client.subscribe("FR114");
  client.subscribe("FR115");
  client.subscribe("FR118");
  client.subscribe("FR112");

  client.subscribe("FR4");
  client.subscribe("FR8");

  client.subscribe("LevelIRR2");
  client.subscribe("DrinkL1");

  client.on("message", (topic, message) => {
    io.emit(topic, message.toString());
  });
});
emitter.setMaxListeners(30);

http.listen(4000, () => {
  console.log("Listening on port 4000");
});
