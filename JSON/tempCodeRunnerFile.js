
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

const myjson = JSON.stringify(person);
console.log(myjson);