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




// Express 
const express = require ('express')

const app = express()  // Call the function, const app by convention

/*
app obj has a lot of methods - corresponds to http method
app.get()
app.post()
app.put()
app.delete()

*/ 


app.get('/', (rea, res) =>{
     res.send('Hello World')
} ) // takes 2 args 1. path/url  2. callback fn which is will called when we get an http get request to our path/url(1st arg) 

app.listen(3000, () => console.log('Listenting on port 300'))