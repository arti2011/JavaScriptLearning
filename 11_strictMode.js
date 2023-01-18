'use strict'
let city = "Pune";
console.log(city);

const person = {
    name: "Mohit",
    age: 23
}
console.log(person);

// delete person;

//function show(name, name){
 //   console.log(name, name);
//}
//show("Dhoni", 42);

// ``

const fullName = "Sachin Tendulkar";
const age = 45;
const city = "Mumbai";

let details = "Details ".concat(fullName).concat("  "). concat(age).concat(" ").concat(city);
let detailsUsingPlus ="Details " +fullName+"  " + age + "  " + city;
console.log(details);
console.log(detailsUsingPlus);

let detailsUsingTemplate =`Details are ${fullName}  ${age}  ${city}`;
console.log(detailsUsingTemplate)

