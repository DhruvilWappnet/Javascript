function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(100);
console.log(value);

var text1 = "The temperature is " + toCelsius(77) + " Celsius";

console.log(text1);

// anonymous - function (function without name).

// const x = function (a, b) { return a * b };
// let z = x(4, 3);
// console.log(z);



// let p = new Function("a", "b", "return a*b");
// console.log(p(2, 4));

// Function Hoisting

myfunction(5);

function myfunction(y) {
    console.log(y * y);
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

// -------------

function f1() {
    console.log(arguments.length);
    return 5;
}
f1(1, 2, 3, 4, 5);
let x = 5;
let text = x.toString();
console.log(text);

function f1(a, b, c = 9) {
    console.log(arguments.length);
    return a * b * c;
}

console.log(f1(1, 22, 2, 5));
function print(obj) {
    for (const key in obj) {
        console.log(`Key: ${key}, value: ${obj[key]}`);
    }
}

// passed by value and passed by refrence
let a = 10;
let obj = [10, 11, 12];
function change(a, obj) {
    a = 100;
    obj.push(13);
}
change(a, obj);
console.log(a, "fffffffffffffffff");
print(obj);

let p = new Array(1, 2, 3, 4, 5);
change(a, p);
print(p);

try { window } catch (err) {
    console.log("Oops, `window` is not defined")
}

//  this keyword refers to an object.

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

let x1 = this;

console.log(x1);

// -------------

const person = {
    first: "Dhruvil",
    last: "Prajapati",
    middle: "Alpeshkumar",
    fullname: function (city = "Mehsana", country = "india") {
        console.log(this.first + " " + this.middle + " " + this.last + " " + city + "," + country);
        console.log(this);
        // return this;
        return this.first + " " + this.last;
    }
}

// --------

let p2 = person.fullname();
console.log(p2);

// function constructor
function fun2(name, age) {
    this.carname = name;
    this.carage = age;
    console.log(this.carage);
}
const myobj = new fun2("Volvo", 5);
console.log(myobj.carname);

//----------

// The call() method is a predefined JavaScript method.
// passing obj as parameter anf using that object
// It can be used to invoke (call) a method with an owner object as an argument (parameter).


const person2 = {
    first: "Jay",
    last: "Patel",
    middle: "Ramlal",
    city: "delhi"
}

const person3 = {
    first: "Mehul",
    last: "Patel",
    middle: "Vijaybhai",
    city: "Rajkot"
}

// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

let p3 = person.fullnamṇe.call(person2, "Mumbai", "India");
let p4 = person.fullname.apply(person3, ["Oslo", "Norway"]);
console.log(p4);

console.log(Math.max.call(null, 1, 2, 3));

// Function Borrowin With the bind() method, an object can borrow a method from another object. used to find function and prevent object to lose .

const person4 = {
    first: "Jay",
    last: "Rana",
    middle: "Vijaybhai",
    city: "Mumbai"
}
let p5 = person.fullname.bind(person4);
console.log(p5());


