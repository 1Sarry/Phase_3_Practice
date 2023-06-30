//alert("Practice Promise")
// // Q-1

// function job() {
//     return new Promise(function(resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise

// .then(function() {
//     console.log('Success 1');
// }).then(function() {
//     console.log('Success 2');
// }).then(function() {
//     console.log('Success 3');
// }).catch(function() {
//     console.log('Error 1');
//     return "test"
// }).then(function() {
//     console.log('Success 4');
//     console.log(new Error('test'))
    
// });


// //  Out Put Error 1,  Success 4

// //Q-2

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(true);

// promise

// .then(function(data) {
//     console.log(data);  // s

//     return job(false);
// })

// .catch(function(error) {
//     console.log(error);  // e

//     return 'Error caught'; // Serve as an input to the next resolve 
//     //return 'Error caught'; if there is no return output will be "Undefined" b/c it is in chain
//     // the return input for the next chain.
// })

// .then(function(data) {
//     console.log(data);  // ec
//     return job(true);
// })

// .catch(function(error) {
//     console.log(error); // do not execute here since the above imput is resolve
// });


// Q-3

function job(state) {
    return new Promise(function(resolve, reject) {
        if (state) {
            resolve('success');
        } else {
            reject('error');
        }
    });
}

let promise = job(true);

promise

.then(function(data) {
    console.log(data); // success

    return job(true);
})

.then(function(data) {
    if (data !== 'victory') {
        throw 'Defeat';  
    }
// since it is throw the execution of the enxt statmetns in the current function will stop execution. so the statment after throw won't be executed.
    return job(true); //so this return function won't pass to the next promise chain.
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);  // defeat
    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);  // error

    return 'Error caught'; 
    // there is no functiion returned here either job(true) or job(false) so the next chain takes only what we return in the current function in this case "return 'Error Caught'" if one of the functions were returned it refers the initial job(state) function. 
})

.then(function(data) {
    console.log(data);  // Error Caught

    return new Error('test');// goes to then
   // throw new Error('test');// in case of throw it goes to catch
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message); // Error:test
});



// after catch handles the error if then comes next then it will be executed. because catch handles the error already and it is assumed the function is currently resolved. 





















// function fun1 () {
//     console.log("fun 1")
// }

// function fun2() {
//     console.log("fun2 ")
//     throw "test"
//     return fun1()
// }

// fun2()

// function job(state) {
//     return new Promise(function(resolve, reject) {
//         if (state) {
//             resolve('success');
//         } else {
//             reject('error');
//         }
//     });
// }

// let promise = job(false);

// promise

// .catch(function(error) {
//     console.log(error);  // error

//     return 'Error caught'; // Error ...
// })