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

// let e = new Error('test');
// console.log(e.message)
// console.log(e.name)

// console.log(Error)









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

//     return 'Error caught';  // ec
// })

// .then(function(data) {
//     console.log(data);

//     return job(true);
// })

// .catch(function(error) {
//     console.log(error);
// });


// // // Q-3

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
        throw 'Defeat';  // defeat
    }

    return job(true);
})

.then(function(data) {
    console.log(data);
})

.catch(function(error) {
    console.log(error);  // error 

    return job(false);
})

.then(function(data) {
    console.log(data);

    return job(true);
})

.catch(function(error) {
    console.log(error);  // error

    return 'Error caught'; // Error ...
})

.then(function(data) {
    console.log(data);

    return new Error('test');
})

.then(function(data) {
    console.log('Success:', data.message);
})

.catch(function(data) {
    console.log('Error:', data.message);
});


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