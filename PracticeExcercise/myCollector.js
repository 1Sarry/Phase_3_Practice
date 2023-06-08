const prod1 = require("./myFirst");
const prod2 = require("./mySecond");
const fs = require("fs");


const data = fs.readFile('results.txt', 'utf8', function(err, data){
    const prod3=prod1.myMultiplier(14)
    if(err) console.log('Error', err);
    else console.log(data , prod3 )
})
//console.log(files)`(${data})`
//prod1.myMultiplier(5);
//prod2.myMultiplier(5);

//var prod3 = prod1.myMultiplier(14);
