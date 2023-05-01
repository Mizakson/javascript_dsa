// notes on promises

/* 
promises:

a constructor function, used to make a promise to do
something, usually asynchronously.

when the task is done, you either fulfill the promise 
or fail

since it is a constructor function, you need to use the
'new' keyword when creating one. 

a promise takes a function as its argument,
and two parameters, resolve and reject (used to determine the outcome)

*/

// example
const myPromise = new Promise((resolve, reject) => {
    // add condition
    if (conditionHere) {
        resolve("Promise fulfilled");
    } else {
        reject("Promise rejected");
    }
});

/* 
promises are most usefule when you have a process
that takes an unknown amount of time in your code (asynchronous usually)
example = server request

the 'then' method allows you to do something with the response from
the server.

'then' method is executed immediately after your promise is fulfilled with resolve

*/

// example of promise handling
myPromise.then(result => {
    // result comes from the argument given to the resolve method
});


/* 
rejected promise handling
use 'catch'
*/

// example using cath instead of then
myPromise.catch(error => {
    // error comes from the argument given to the reject method
}); 