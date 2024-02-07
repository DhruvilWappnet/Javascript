// const { prototype } = require("ws");

// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     middleName: "Joy",
//     age: 50,
//     "eyeColor": "blue",
//     home: {
//         home1: "A",
//         home2: "b",
//         home3: "c"
//     },
//     cars: [
//         { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
//         { name: "BMW", models: ["320", "X3", "X5"] },
//         { name: "Fiat", models: ["500", "Panda"] }
//     ],
//     fullname: function (city = "Mehsana", country = "india") {
//         console.log(this.firstName + " " + this.middleName + " " + this.lastName + " " + city + "," + country);
//         // console.log(this);
//         // return this;
//         // return this.first + " " + this.last;
//     },
//     today: new Date(),
//     get name() {
//         return this.firstName;
//     },
//     set name(name1) {
//         this.firstName = name1;
//     }
// };

// // const array2 = Object.values(person1); // convereting to object of values
// // console.log(array2);

// const add = (function () {
//     let counter = 0;
//     return function () { counter += 1; return counter } // self-invoking fuctioon
// })();
// console.log(add());
// console.log(add());
// console.log(add);


// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
// }

// Person.prototype.nationality = "English";
// // console.log("+++++++++++++++++++++++",Object.getOwnPropertyNames(Person));
// // console.log(Person);
// // const array=Object.values(Person);
// // console.log(array);

// const p1 = new Person("H", "B", 12, "red");
// console.log(p1.nationality);



// function num() {
//     let n = 0;
//     return {
//         next: function () {
//             n += 10;
//             return { value: n, done: false };
//         }
//     };
// }
// let n = num();
// // console.log(n.next().value);
// // console.log(n.next().done);
// // console.log(n.next());


// // const letter = new Set();
// // letter.add("a");
// // letter.add("b");
// // letter.add("c");
// // letter.add("dhr");

// // let text = "";
// // for (const key of letter) {
// //     console.log(key);
// //     text += key;
// // }
// // console.log(text);
// // letter.forEach((value) => {
// //     console.log(value);
// // })
// // letter.clear()
// // console.log(letter.entries())
// // console.log(letter.has("a"))
// // console.log("Deleted:",letter.delete("a"))
// // console.log(letter.has("a"))

// const mp = new Map();
// mp.set("a", -50);
// mp.set("b", 50);
// mp.set("c", 150);
// mp.set("d", 250);
// const apples = { name: "apples" };
// mp.set(apples, 100)

// // mp.delete("a");
// // mp.clear();
// console.log(mp.get("a"));
// console.log(mp.has("ab"));
// console.log(mp.entries());
// console.log(mp.keys());
// console.log(mp.values());
// console.log(mp.size);


const personPrototype = {
    greet() {
        console.log(`hello, my name is ${this.name}!`);
    },
};

function Person(name) {
    this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;

