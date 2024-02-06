function outer(a, b) {
    function inner(a) {
        return a * a;
    }
    return inner(a) + inner(b);
}

var p = outer(5, 3);
console.log(p);

// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

myfun();

function myfun() {
    let a = 10;
}
console.log(a*a);

let counter = 1;
function add() {
    counter++;
}
add();
console.log(counter);

// JavaScript Nested Functions

function add() {
    let counter = 0;
    function plus() { counter += 1; }
    plus();
    return counter;
}

console.log(add());
console.log(add());

// JavaScript Closures

//  A closure in JavaScript is a combination of a function and the lexical environment within which that function was declared.This allows the function to retain access to variables from its parent scope even after the parent function has finished executing.Closures are commonly used to create private variables, encapsulate functionality, and maintain state across multiple function calls.

function add() {
    let counter = 0;
    function plus() {
        counter++;
        console.log(counter);
    }
    return plus;
}
let val = add();
val();
val();
val();
console.log(add()());

const add = (function () {
    let counter = 0;
    return function () { counter += 1; return counter } // self-invoking fuctioon
})();
console.log(add());
console.log(add());
console.log(add());

function outside() {
    const x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

console.log(outside()(10));


let a1 = 1011;
console.log(a1);
function myf() {
    // console.log(a1);
    // let a1 = 5555;
    a1 = 555;
    console.log(a1);
}
myf();
console.log(a1);

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium", "abcdefgh"];

const a2 = a.map(function (s) {
    return s.length;
});

console.log(a2); // [8, 6, 7, 9]

const a3 = a.map((s) => s.length);

console.log(a3); // [8, 6, 7, 9]

// ---------------------------------------------------------------------------

const createPet = function (name, sex) {
    // let sex;

    const pet = {
        // setName(newName) is equivalent to setName: function (newName)
        // in this context
        setName(newName) {
            name = newName;
        },

        getName() {
            return name;
        },

        getSex() {
            return sex;
        },

        setSex(newSex) {
            if (
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ) {
                sex = newSex;
            }
        },
    };

    return pet;
};

const pet = createPet("Vivie","female");
console.log(pet.getName()); // Vivie
console.log(pet.getSex()); // male

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver

function Person() {
    this.age = 0;
    const time = setInterval(() => {
        this.age++; // `this` properly refers to the person object
        console.log(this.age);
    }, 1000);
    setTimeout(() => {
        clearInterval(time);
    }, 4200)
}

var p = new Person();

function sum(b,a,...args) {
    let ans = 0;
    console.log(args.length)
    for (const key of args) {
        ans += key*a+b;
    }
    return ans;
}
let ans=sum(-2,2,2,3,4);
console.log(ans);

