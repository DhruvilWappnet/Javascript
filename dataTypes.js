a = 2 ** 4
console.log(a);

// JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

// Javascript numbers are always one type:
// double (64-bit floating point).

let obj; // here datatype is undefined
obj = 10;  // here datatype is number
obj = "Dhruvil"; // here datatype is string
obj = BigInt(123456789012345678901234567890) // here datatpe is bigint
obj = true; // here datatype is boolean
obj = ["mehsana", "ahemdabad", "patan"] // here datatype is object
obj = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" }; // here datatype is object


console.log(typeof (obj) + " <-> " + obj);

let x = 10;
let y = 10.00;
if (x == y) {
    console.log("Equal");
} else {
    console.log("Not equal");
}

let cities = ["mehsana", "ahemdabad", "patan"];
cities.push("Delhi");
for (const key in cities) {
    console.log(cities[key]);
}

let person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
person.age = 25;
console.log(person.age);
person.city = "Delhi";
console.log(person.city);

for (const key in person) {
    console.log(key);
}
