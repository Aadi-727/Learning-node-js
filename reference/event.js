const EventEmitter = require("events");

// create class
class Emitter extends EventEmitter {}

// init object

const emitter = new Emitter();

emitter.on("event", () => console.log("Event fired"));

// init event
emitter.emit("event");
