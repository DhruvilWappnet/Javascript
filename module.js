// 📁 module.js
// export and import

export const name = "Jesse";
export const age = 40;

const name = "Jesse";
const age = 40;

export { name, age };

const message = () => {
    const name = "Dhruvil";
    const age = 20;
    return name + ' is ' + age + ' year old. ';
};

export default message;


import { name, age } from "./module.js"
console.log(name, age);

import message from "./module.js";
let a = message;
console.log(a());

// module is executed only once. Exports are generated, and then they are shared between importers, so if something changes the admin object, other importers will see that.
