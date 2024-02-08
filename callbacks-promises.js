// A callback is a function passed as an argument to another function
// This technique allows a function to call another function
// A callback function can run after another function has finished

function myFirst() {
    console.log("Hello");
}
function mySecond() {
    console.log("Goodbye");
}
myFirst();
mySecond();


function mysum(n) {
    console.log("Sum:", n);
}
function calculation(n1, n2, mycallback) {
    let s = n1 + n2;
    mycallback(s);
}
calculation(10, 15, mysum);


const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const posnum = removeneg(myNumbers, (x) => x >= 0);
posnum.sort((a, b) => { return a - b });
console.log(posnum);

function removeneg(mynum, callback) {
    const arr = [];
    for (const x of mynum) {
        if (callback(x)) {
            arr.push(x);
        }
    }
    return arr;
}

const num = 0;
check(num);
function reach() {
    console.log("reached");
}

function check(num) {
    try {
        document.getElementById("id");
    }
    catch (err) {
        console.log("dddddddddddddddddddddddddddddddd", err);
    }
}
loadScript("fe");

// callback problems:
// 1. have to give function as arguments and that function can be manipulated
// 2.pyramid of doom

// Functions running in parallel with other functions are called asynchronous
// A good example is JavaScript setTimeout()


function check(num, callback) {
    if (num == 10) {
        callback(1);
        return;
    }
    callback(0);
}


function hayyy(x) {
    if (x == 1) {
        console.log("ERROR!!!!!!!!!!!!!!!");
        return;
    }
    console.log("passed");
}

check(5, hayyy);
check(5, function hayyy(x) {
    if (x == 1) {
        console.log("ERROR!!!!!!!!!!!!!!!");
        return;
    }

    check(10, function hayyy(x) {
        if (x) {
            console.log("ERROR!!!!!!!!!!!!!!!");
            return;
        }
        console.log("passed");
    })
})

const newnum = (callback) => {
    setTimeout(() => {
        console.log(Math.random() * 10);
        callback && callback();
    }, 1000);
}

newnum(() => {
    newnum(() => {
        newnum(() => {
            newnum(() => {

            })
        })
    })
})
// Function to simulate fetching data from an API asynchronously with a callback
function fetchDataFromAPI(callback) {
    setTimeout(() => {
        const data = { id: 1, name: 'Data from API' };
        callback(null, data); // Pass null for error and data for result
    }, 2000); // Simulate 2 seconds delay
}

// Callback hell: nested callbacks for multiple API requests
fetchDataFromAPI((error1, data1) => {
    if (error1) {
        console.error('Error fetching data 1:', error1);
    } else {
        console.log('Data 1:', data1);
        fetchDataFromAPI((error2, data2) => {
            if (error2) {
                console.error('Error fetching data 2:', error2);
            } else {
                console.log('Data 2:', data2);
                fetchDataFromAPI((error3, data3) => {
                    if (error3) {
                        console.error('Error fetching data 3:', error3);
                    } else {
                        console.log('Data 3:', data3);
                        // Process the fetched data here
                    }
                });
            }
        });
    }
});


// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code
// promises either accepted or rejected , either pass or fail 
// for parallel execution

let newpromise = new Promise((resolve, reject) => {
    console.log("Hello 5");
    setTimeout(() => {
        value = 20;
        console.log("Hello after 2 second");
    }, 2000);
    resolve(12);
});

newpromise.then(
    function (value) {
        console.log(value);
    }
);

console.log("Hello");
// var value = 10;
setTimeout(() => {
    value = 20;
    console.log("Hello after 2 second");
}, 2000);

console.log(value);
console.log("My name is Dhruvil");
console.log(newpromise);


let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Inside");
        resolve(10);
    }, 1000);
    // reject(100);
});
console.log(mypromise);
mypromise.then(
    function (value) { console.log(value); },
    function (err) { console.log(err); }
);

mypromise.then((value) => {
    console.log(value);
})
    .catch((value) => {
        console.log(value);
    })


setTimeout(function () { myFunction("I am Dhruvil !!!"); }, 1000);
function myFunction(value) {
    console.log("Callback completed.")
}


let myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () { myResolve("I love You !!"); }, 1000);
});
myPromise.then(function (value) {

    console.log("Promise compled");
});



// Function to simulate fetching data from an API asynchronously with a promise
function fetchDataFromAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { id: 1, name: 'Data from API' };
            resolve(data); // Resolve with data
            // Simulate an error:
            // reject(new Error('Failed to fetch data'));
        }, 2000); // Simulate 2 seconds delay
    });
}

// Promise chaining for multiple API requests
fetchDataFromAPI()
    .then(data1 => {
        console.log('Data 1:', data1);
        return fetchDataFromAPI(); // Return a promise for the next request
    })
    .then(data2 => {
        console.log('Data 2:', data2);
        return fetchDataFromAPI(); // Return a promise for the next request
    })
    .then(data3 => {
        console.log('Data 3:', data3);
        // Process the fetched data here
    })
    .catch(error => {
        console.error('Error:', error);
    });

let p1 = new Promise((resolve, reject) => {
    console.log("in promis");
    resolve(true);
})


let p2 = new Promise((resolve, reject) => {
    console.log("in promis");
    reject(false);
})

p1.then((data) => {
    console.log(data);
})
.catch ((data) => {
    console.log(data);
})

p2.then((data) => {
    console.log(data);
})
.catch ((data) => {
    console.log(data);
})