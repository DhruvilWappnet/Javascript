// // "Producing code" is code that can take some time
// // "Consuming code" is code that must wait for the result
// // A Promise is an Object that links Producing code and Consuming code
// // promises either accepted or rejected , either pass or fail
// // for parallel execution

// let newpromise = new Promise((resolve, reject) => {
//     console.log("Hello 5");
//     setTimeout(() => {
//         value = 20;
//         console.log("Hello after 2 second");
//     }, 2000);
//     resolve(12);
// });

// newpromise.then(
//     function (value) {
//         console.log(value);
//     }
// );

// console.log("Hello");
// // var value = 10;
// setTimeout(() => {
//     value = 20;
//     console.log("Hello after 2 second");
// }, 2000);

// console.log(value);
// console.log("My name is Dhruvil");
// console.log(newpromise);


// let mypromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Inside");
//         resolve(10);
//     }, 1000);
//     // reject(100);
// });
// console.log(mypromise);
// mypromise.then(
//     function (value) { console.log(value); },
//     function (err) { console.log(err); }
// );

// mypromise.then((value) => {
//     console.log(value);
// })
//     .catch((value) => {
//         console.log(value);
//     })


// setTimeout(function () { myFunction("I am Dhruvil !!!"); }, 1000);
// function myFunction(value) {
//     console.log("Callback completed.")
// }


// let myPromise = new Promise(function (myResolve, myReject) {
//     setTimeout(function () { myResolve("I love You !!"); }, 1000);
// });
// myPromise.then(function (value) {

//     console.log("Promise compled");
// });


// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

// async function

const arr = ['a', 'a', 'b', 'b', 'b', 'c']

const np = new Map();
for (const key of arr) {
    if (np.has(key)){
        np
    }
}