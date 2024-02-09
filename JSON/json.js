// JSON stands for JavaScript Object Notation
// JSON is a text format for storing and transporting data
// JSON is "self-describing" and easy to understand


// JavaScript has a built in function for converting JSON strings into JavaScript objects: JSON.parse()
// JavaScript also has a built in function for converting an object into a JSON string: JSON.stringify()

// Valid Data Types:  string,number,object,array,boolean,null

const xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        // const data = '{"name":"John", "age":30, "city":"New York"}';
        const data = xhr.response;
        let jsondata = JSON.stringify(data);
        let parseddata = JSON.parse(data);
        console.log(data);
        console.log(jsondata);
        console.log(parseddata);
    } else {
        console.error('Request failed:', xhr.status);
    }
}
xhr.open("GET", "./data.txt", true);
xhr.send();


// Instead of require, use import to import the fs module
import { readFile } from 'fs/promises';

// Read the JSON file
async function readJSONFile() {
    try {
        const data = await readFile('./data.txt', 'utf8');
        const obj = JSON.parse(data);
        console.log(obj);
    } catch (error) {
        console.error('Error reading/parsing JSON file:', error);
    }
}

// Call the readJSONFile function
readJSONFile();




const text1 = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text1);
console.log(myArr);


const text2 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text2);
obj.birth = new Date(obj.birth);
let date=obj.birth;
console.log(obj.birth);
console.log(date);

const text3 = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(text3);
obj.age = eval("(" + obj.age + ")");
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();


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
person.fullname = person.fullname.toString();
// console.log(person)

const myjson = JSON.stringify(person);
const datajson = JSON.parse(myjson);
console.log(myjson);
console.log(datajson["firstName"]);
console.log(datajson);
datajson.fullname = eval("(" + datajson.fullname + ")");           // covert string fuction to working function
datajson.fullname()


let text = "";
for (const key in datajson) {
    text += key + " ";
}
console.log(text)

const arr = ["John", "Peter", "Sally", "Jane"];
const myJSON = JSON.stringify(arr);
console.log(myJSON);