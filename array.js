function print(arr) {
    for (const key of arr) {
        console.log(key);
    }
}

// const cars = ["Saab", "Volvo", "BMW"]; //array
const person = { firstName: "John", lastName: "Doe", age: 46 }; //object
const d = [cars, person];
// console.log(typeof(person))
cars[1] = "Audi";
print(d);

let s1 = cars.toString();
console.log(s1);


let values = [1,3,6,1,54,1,4,5,2,21,8];
// print(values);
values.push(200);
// values["name"]="name";
values.sort();
console.log(Array.isArray(person));
console.log(person instanceof Array)


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
let length = fruits.push("Kiwi");
let fruit = fruits.shift();
let l=fruits.unshift("Lemon");
delete fruits[0];
let text = fruits.join(" * ");
console.log(l);
console.log(text);


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
print(myChildren)


fruits.copyWithin(2, 0);
fruits.splice(2, 1, "Lemon", "Kiwi");
fruits.splice(0, 1);
fruits.sort();
fruits.reverse();
const demo = fruits.slice(2,4);
print(demo);


let position = fruits.indexOf("Apple") + 1;
console.log(position);

let check=fruits.includes("Madngo");
console.log(check); 


const numbers = [4, 9, 58, 16, 25, 29];
let first = numbers.find(myFunction);
console.log(first);

function myFunction(value, index, array) {
    return value > 18;
}

function f2(arr) {
    let ind = 0;
    for (const key of arr) {
        ind++;
        if (key > 18) {
            return ind + 1;
        }
    }
    return -1;
}
console.log(f2(numbers));


const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
let high2 = temp.findLastIndex(x => x > 40);
console.log(high);


const months = ["Jan", "Feb", "Mar", "Apr"];
const reversed = months.toReversed();
console.log(reversed);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return a - b });  // sorting using comparator function
// points.sort(function (a, b) { return 0.5 - Math.random ()});
// sort(comparator function)
console.log(points);


const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
    return value * 2;
}