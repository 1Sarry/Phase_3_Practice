const http = require("http");
const fs = require("fs");
const { dirname } = require("path");
const url = require("url");
const mimetypelookup = require("mime-types").lookup; // https://www.npmjs.com/package/mime-types

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

// const server2 = http.createServer((req, res) => {
//   fs.readFile("./about.html", (err, fileData) => {
//     if (err) {
//       res.writeHead(404, { "Content-Type": "text/html" });
//       res.end("Page Not Found");
//       console.log(req)
//     }
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write(fileData);
//     res.end("This is it");
//   });
// });

// server2.listen(8989, () => {
//   console.log("Server is Listening to 8989...");
// })

/*
Modify your request listener function in a way it would serve the "about.html"
page when users request it on the browser
■ Hint: You will need to import additional node modules to display your
“about.html” page when users request it on the browser
*/

const server = http.createServer((req, res) => {
  /*
  // first - handle the request

  //console.log(req);
  //console.log(req.url) // req object always has the req.url data, so we can identify the requested file name
  */
  const parsedUrl = url.parse(req.url, true);
  /*  
   // to specifically identify the url (eg. parse /hhhh.html to /hhhh)
  // allows us to extract the relevant parts of the url that we need to handle the request approprietly
  //console.log(parsedUrl)

  // - check the requested path - return the appropriet page or return error message
  
  */
  let filePath = parsedUrl.path;
  if (filePath == "/about.html") {
    //console.log(__dirname)
    //console.log(__filename)
    var reqFile = __dirname + filePath;
    const readF = fs.readFile(reqFile, (err, content) => {
      if (err) {
        res.writeHead(404);
        res.end();
      } else {
        res.writeHead(200, { "content-type": "text/html" });
        res.end(content);
      }
    });
  } else {
    res.write("Hello World");
    res.end();
  }
});

server.listen(7070, () => {
  console.log("I am Listening");
});

// Create the Server Object
// const server = http.createServer(function (req, res) {
//   console.log(req);
// const parsedUrl = url.parse(req.url, true);
// // console.log(parsedUrl);

// // // Requested file name
// let filePath = parsedUrl.path;
// // console.log(filePath);
// if (filePath == "/") {
//   filePath = "/index.html";
// }
// var requestedFile = __dirname + "/public/" + filePath;
// // console.log(requestedFile);
// const readFile = fs.readFile(requestedFile, function (err, content) {
//   if (err) {
//     res.writeHead(404);
//     res.end();
//   } else {
//     let mime = mimetypelookup(filePath);
//     res.writeHead(200, { "content-type": mime });
//     res.end(content);
//   }
// });
// });
