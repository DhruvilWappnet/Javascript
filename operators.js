// Assignment Operator (=)
let x = 10;


// Types of JavaScript Operators
// There are different types of JavaScript operators:

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

//1. Arithmetic Operators (+,-,*,/,**,%,++,--)

var p = 10;
p = p + x; // 20
p = p - x; // 10
p = p * x; // 100
p = p / x; // 10

console.log(p);

p++;
p--;

let mod = p % 3;
console.log(mod);

if (mod) {
    p = p ** 2;
}
console.log(p);

//2. Assignment Operators (=,+=,-=,/=,*=,%=,**=)

let example = 10;

// Using various assignment operators
example += 5;   // example = example + 5;
example -= 3;   // example = example - 3;
example *= 2;   // example = example * 2;
example /= 4;   // example = example / 4;
example %= 5;   // example = example % 3;
example **= 2;  // example = example ** 2;

console.log(example); // Output: 16

//3. Comparison Operators (==,===,!=,!==,>,<,>=,<=,?)

let a = 10;
let b = 15;
let c = "10";
let d = "15";

console.log(a == c); // true;
console.log(a === c); // false;
console.log(a != c); //false;
console.log(a !== c); //false;
console.log(b > c); // true;
console.log(b < c); // false



//4. String Operators

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
text = text1 + " " + text2

let value1 = "20";
let value2 = "5";
let result2 = value1 < value2;
console.log(result2)

//5. Logical Operators (&&,||,!) 

var val1 = 20, val2 = 2;
if (val1 && true) {
    console.log("equal");
}
else {
    console.log("not equal");
}

//6. Bitwise Operators (&,|,~,^,<<,>>,>>>)

// Bitwise AND (&) and Left Shift (<<)
let a1 = 5;     // Binary: 0101
let b1 = 3;     // Binary: 0011
let res1 = (a1 & b1) << 2;  // Binary: 0100 (4 in decimal)

// Bitwise OR (|) and Right Shift (>>)
let c1 = 8;     // Binary: 1000
let d1 = 3;     // Binary: 0011
let res2 = (c1 | d1) >> 1;  // Binary: 1001 (9 in decimal)

// Bitwise XOR (^) and Unsigned Right Shift (>>>)
let e1 = 12;    // Binary: 1100
let f1 = 5;     // Binary: 0101
let res3 = (e1 ^ f1) >>> 1;  // Binary: 0100 (4 in decimal)

console.log(res1);  // Output: 4
console.log(res2);  // Output: 9
console.log(res3);  // Output: 4

//7. Ternary Operators


var age = 20;
let eligibility = (age >= 18) ? "Eligible" : "Not Eligible";
console.log(eligibility); // "Eligible"

//8. Type Operators (typeof,instanceof)

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log(typeof (person));

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car ('Honda', 'Accord', 1998, '555');
// const auto="honda";
console.log(auto);

console.log(auto instanceof Car);
//  output: true

console.log(auto instanceof Object);
//  output: true
