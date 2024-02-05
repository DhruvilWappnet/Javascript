function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(100);
console.log(value);

let text = "The temperature is " + toCelsius(77) + " Celsius";

console.log(text);

// anonymous - function (function without name).

const x = function (a, b) { return a * b };
let z = x(4, 3);
console.log(z);



let p = new Function("a", "b", "return a*b");
console.log(p(2, 4));

// Function Hoisting

myfunction(5);

function myfunction(y) {
    return y * y;
}

// Self-Invoking Functions

(function () {
    let x = "Hello!!";
    console.log(x); // I will invoke myself
})();


// parameter as an array -- arguments as array

let short_fun = (...args) => {
    let sum = 0;
    for (let val of args) {
        sum += val;
    }
    return sum;
}

console.log(`Ans:${short_fun(1, 2, 4, 5, 6, 23, 5, 62, 512, 2)}`);

x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}