// Variable types:
// let,var and const

// let variable:
function letUse() {
    let x = 5;
    let y = 6;
    let z = x + y;
    console.log(z);
}

letUse();

//const variable:
function constUse() {
    const x = 5;
    const y = 6;
    const z = x + y;
    console.log(z);
}

constUse();


//var variable:
function constUse() {
    var x = 15;
    var y = 20;
    var z = x + y;
    console.log(z);
}

constUse();


// Scope: Global,BLock,Function

//1. let is block scope variable

let name = "Dhruvil"; // here name is Dhruvil
// let name="Yash"; // error
{
    let name = "Raj"; // here name is Raj
}


// console.log(b);
// let b = 50;   // no hoisting


//2. var variable can be redeclared and it is not block variable

var age = 50; // here age is 50
var age = 20; // here age is 20
{
    var age = 30; // here age is 30
}

carname = "volvo";
var carname;
console.log(carname); // hoisting is possible in var

//3. const variable can't be redecleared and it is block variable

const city = "mehsana"; // here city = mehsana
// city="ahemdabad"; // give error
{
    const city = "delhi"; //here city = delhi
    console.log(city);
}
console.log(city);

// Can create a const object:
const car = { type: "Fiat", model: "500", color: "white" };
car.color = "red";
car.owner = "Johnson";
// car = {type:"Volvo", model:"EX60", color:"red"};    // give error

cartype = "automatic";
const cartype = "manual";  // hoisting is 
