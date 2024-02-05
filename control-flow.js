// Control-flow
const prompt = require('prompt-sync')();

//1. Conditional Statements :

let temperature = 25;

if (temperature > 30) {
    console.log("It's a hot day!");
} else {
    console.log("It's a moderate or cool day.");
}

let hour = 15;

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}

// let dayOfWeek = Number(prompt("Enter number:"));
let dayOfWeek = new Date().getDay();
console.log(typeof (dayOfWeek));
let dayName;


switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thrusday";
        break;
    case 5:
        dayName = "Friday";
        break;
    default:
        dayName = "Holiday day";
}

console.log(`Today is ${dayName}.`);

// 2.loops

//for loop

for (let i = 1; i <= 5; i++) {
    console.log(`Iteration ${i}`);
}

//while

let counter = 0;

while (counter < 5) {
    console.log(`Count: ${counter}`);
    counter++;
}

//do-while

let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num <= 5);

//for-in -- loops through the properties of an Object:

const person = {
    name: "John",
    age: 30,
    job: "Developer"
};

for (let key in person) {
    if (key == "age") {
        continue;
    }
    console.log(`${key}:${person[key]}`);
}

//for-of -- loops through the values of an iterable object.

const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

// for-each
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number);
});


// Error Handling .

function divide(x, y) {
    try {
        const result = x / y;
        console.log(`Result: ${result}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    } finally {
        console.log("This block always executes.");
    }
}

divide(10, 2);   // Result: 5
divide(10,0);    // Error: Division by zero is not allowed.
