const path = require("path");
var pathObj = path.parse(__filename);
//console.log(pathObj)

const os = require("os");
var osMem = os.freemem();
//console.log(osMem)

const EventEmitter = require("events");
const emitter = new EventEmitter();
// raise an event....so we need a listener
emitter.emit("messageLogged");
