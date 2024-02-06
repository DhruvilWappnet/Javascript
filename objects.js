// In JavaScript, almost "everything" is an object
// Object values are written as name : value pairs
// objects called by refrence 

//objectName.property   or   objectName["property"]  

// There are different ways to create new objects:
//   Create a single object, using an object literal.
//   Create a single object, with the keyword new.
//   Define an object constructor, and then create objects of the constructed type.
//   Create an object using Object.create().

// changing values of object property , by direct, by method function , by getter and setter

const person = {
    firstName: "John",
    lastName: "Doe",
    middleName: "Joy",
    age: 50,
    "eyeColor": "blue",
    home: {
        home1: "A",
        home2: "b",
        home3: "c"
    },
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ],
    fullname: function (city = "Mehsana", country = "india") {
        console.log(this.firstName + " " + this.middleName + " " + this.lastName + " " + city + "," + country);
        // console.log(this);
        // return this;
        // return this.first + " " + this.last;
    },
    today: new Date(),
    get name() {
        return this.firstName;
    },
    set name(name1) {
        this.firstName = name1;
    }
};

Object.defineProperty(person, "getage", {
    get: function () { console.log(this.age); }
})

Object.defineProperty(person, "setage", {
    set: function (age) { this.age = age; }
})


person.getage
person.setage = 25;
person.getage
// let x = "age";
// person.city = "Rajkot";
console.log(person.name)
person.name = "yash"
console.log(person.name)
person.fullname = person.fullname.toString();
person.fullname();

console.log(person.lastName);
console.log(person[x]);
console.log(person.city);
console.log(person.home.home1);

let text = "";
delete person.city;

for (const key in person) {
    text += person[key] + " ";
}

console.log(text);

let names = "";
let models = "";

for (let i in person.cars) {
    names += person.cars[i].name + " ";
    for (let j in person.cars[i].models) {
        models += person.cars[i].models[j] + " ";
    }
}
console.log(names);
console.log(models);


// Some common solutions to display JavaScript objects are:

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

const array = Object.values(person); // convereting to object of values
console.log(array);

const data = JSON.stringify(person);  // converting to json object string
console.log(data);

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

let p3 = person.fullname.call(person2, "Mumbai", "India");
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

x = new String("kfjweijf");
console.log(x.length);

x = new Boolean(true);
console.log(x);

function book(name, printed, published) {
    this.name = name;
    this.printed = printed;
    this.published = published;
}
var book1 = new book("Hello", 2020, 2018);
console.log(book1);



const arr = ["John", "Peter", "Sally", "Jane"];

let myString = JSON.stringify(arr);
console.log(myString);
document.getElementById("demo").innerHTML = myString;


const x = /()/

const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
    ["oranges", 200]
  ]);

  console.log(fruits.size)