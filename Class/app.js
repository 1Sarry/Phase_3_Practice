const path = require("path");
var pathObj = path.parse(__filename);
//console.log(pathObj)

const os = require("os");
var osMem = os.freemem();
//console.log(osMem)

const EventEmitter = require("events");
const emitter = new EventEmitter();

// register an event listener that will be called when the "messageLogged" event is raised.
emitter.on("messageLogged", function () {
  //console.log("Listener called");
}); // name of the event which is "messageLogged"

// raise an event....so we need a listener
emitter.emit("messageLogged");

// HTTP Module

const http = require("http");
// const { Socket } = require("dgram");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Sarry");
    res.end();
  }
  if (req.url === "/about/sarry") {
    res.write(JSON.stringify(["sarry", "MERN stack developer"]));
    res.end();
  }
});
// server.on('connection', (socket) => {
//     console.log("New Connection...")
// })
// ctrl + c to exit the process on the terminal

server.listen(3002);
console.log("Listening on port 8080...");
