// Core Node Modules - no need to import, they are there in node by default.

// OS Module

const os = require("os");
//console.log(os);
const platform = os.platform();
console.log(platform)


// HTTP Module
const http = require('http')
const url = require('url')
const fs = require('fs')
 

const x = http.createServer(function(req, res){
console.log("Request Received")
res.end("Hello There")
})
x.listen(90, () =>{
    console.log("It is Listening")
})