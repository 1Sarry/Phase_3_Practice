const http = require("http");
const fs = require("fs");
const { dirname } = require("path");

// using readFileSync
// const fileData = fs.readFileSync("./about.html");
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.write(fileData);
//   res.end();
// });

// server.listen(2345, () => {
//   console.log("server is litening to port 2345...");
// });

// Using readFile

const server2 = http.createServer((req, res) => {
  fs.readFile("./about.html", (err, fileData) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("Page Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(fileData);
    res.end();
  });
});

server2.listen(8989, () => {
  console.log("Server is Listening to 8989...");
});
