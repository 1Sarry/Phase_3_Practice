// Asynch Ex.
//alert("Promise me!")

// console.log("first");
// setTimeout(() => {
//   console.log("Reading a file from DB");
// }, 4000); // it doesn't wait or block it schedules a task
// console.log("Second");

// schedules a task to be performed in the future

// Promise

// let promise = new Promise (function (resolve, reject) {

//   console.log(promise);
//   // if(true){
//   //   resolve('Yeey')
//   // }
//   // if(1=1){
//   //   reject("shit")
//   // } // promise takes the first state change as final (return it)
//   // // if(false){
//   // //   reject("shit")
//   // // })
// })

//console.log(promise);
let promise = new Promise(function (resolve, reject) {
  //resolve("Abebe");
  reject("Not Abebe");
});
console.log(promise);

// then

// promise.then(
//   function (result) {
//     console.log("resolved :" + result);
//   },
//   function (error) {
//     console.log("Error occured :" + error);
//   }
// );

//catch

// promise.catch(handleError)
// function handleError(error){
//   console.log("error handled" + error)
// }

// write the promise first
var isMomHappy = true;

var willIGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      clolor: "Black",
    };
    resolve(phone);
  } else {
    var reason = new Error("Mom is not Happy");
    reject(reason);
  }
});

// then 

willIGetNewPhone.then()