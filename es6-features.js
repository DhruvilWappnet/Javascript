let p1 = new Promise((resolve, reject) => {
    console.log("in promis 1");
    resolve(true);
})


let p2 = new Promise((resolve, reject) => {
    console.log("in promis 2");
    reject(false);
})

p1.then((data) => {
    console.log("Accepted", data);
})
    .catch((data) => {
        console.log("Rejected:", data);
    })

p2.then((data) => {
    console.log("Accepted", data);
})
    .catch((data) => {
        console.log("Rejected:", data);
    })

let name = "Dhruvil"; // here name is Dhruvil
// let name="Yash"; // error
{
    let name = "Raj"; // here name is Raj
}

var x = 10;
// Here x is 10
{
    const x = 2;
    // Here x is 2
}
// Here x is 10


// Arrow Functions

// ES5
var x = function (x, y) {
    return x * y;
}

// ES6
const x = (x, y) => x * y;


const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);

const num = [1, 2, 43, 5, 2, 53];
console.log(Math.max(...num));

{
    const letter = new Set();
    letter.add("a");
    letter.add("b");
    letter.add("c");
    letter.add("dhr");

    let text = "";
    for (const key of letter) {
        console.log(key);
        text += key;
    }
    console.log(text);
    letter.forEach((value) => {
        console.log(value);
    })
    letter.clear()
    console.log(letter.entries())
    console.log(letter.has("a"))
    console.log("Deleted:", letter.delete("a"))
    console.log(letter.has("a"))

    const mp = new Map();
    mp.set("a", -50);
    mp.set("b", 50);
    mp.set("c", 150);
    mp.set("d", 250);
    const apples = { name: "apples" };
    mp.set(apples, 100)

    mp.delete("a");
    mp.clear();
    console.log(mp.get("a"));
    console.log(mp.has("ab"));
    console.log(mp.entries());
    console.log(mp.keys());
    console.log(mp.values());
    console.log(mp.size);
}

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar1 = new Car("Ford", 2011);
const myCar2 = new Car("Audi", 2019);

console.log(myCar1.name);
console.log(myCar1.age());


const myPromise = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
        console.log("Printed");
        myResolve("Hello i am dhruvil");
    }, 3000);
    myReject("Hello Rejected.");
});

myPromise.then(function (value) {
    console.log(`${value}`, "Prossed");
})
    .catch((err) => {
        console.log(err, "Completed");
    })


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let id = Symbol('id');
person[id] = 140353;
let hiddenName = Symbol("hiddenName");
person[hiddenName] = "Ghost";
console.log(person.hiddenName);
console.log(person[hiddenName]);
console.log(person.id);
console.log(person[id]);

let text = "Hello world, welcome to the universe. ";
console.log(text.includes("world"))
console.log(text.startsWith("Hello"))
console.log(text.endsWith("universe."))


const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
let second = findval(numbers);
console.log(first + "  " + second);

function myFunction(value, index, array) {
    return value > 18;
}

function findval(num) {
    let ans = null;
    for (const key of num) {
        if (key > 18) {
            return ans = key;
        }
    }
    return ans;
}


//Math library
console.log(Math.log10(10))


console.log(isFinite(10 / 0));
console.log(isFinite(10 / 1));

import { name, age } from "./module.js"
console.log(name, age);
console.log(import.meta.url);

import message from "./module.js";
let a = message;
