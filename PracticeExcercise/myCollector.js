const prod1 = require("./myFirst");
const prod2 = require("./mySecond");
const fs = require("fs");

const prod3 = prod1.myMultiplier(14)
const prod4 = prod2.myMultiplier(14)
const data = fs.readFile('results.txt', 'utf8', function(err, data){
    
    if(err) console.log('Error', err);
    else console.log(data , "(" + prod4 +")" )
    
})
//console.log(prod3)
//prod1.myMultiplier(5);
//prod2.myMultiplier(5);
//var prod3 = prod1.myMultiplier(14)