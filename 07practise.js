let Student ={
    name:"mohit",
    age : 23,
    rollNo:545,
}

Object.freeze(Student);
Student.wt=56;
Student.colour = "black";
console.log(Student);

console.log(`==freeze an array==`);
const array = [45,67,87,09,34,2]
Object.freeze(array);
console.log(array);
//array.push(56)//

console.log(`merge an object`);
let Students ={
    name:"mohit",
    age : 23,
    rollNo:545,
    company:"tcs",
    mobileNo  :2436767899,
}
let emp = {
    name : "Anil",
    age : 34,
}
 let  merObject=Object.assign({}, Students, emp);
   console.log(merObject);
console.log(`===shallow copy====`);
let car = {
    brand : "Tata",
    colour: "Black"
}
let vehical = car
console.log(car,vehical);

vehical.colour= "Red"
console.log(car,vehical);

car.colour = "Blue"
console.log(car,vehical);






https://www.typescriptlang.org/play?#code/G4QwTgBAHgXBB2BXAtgIwKaQLwQIwAYIBuAKBNEgE84BnAFzAEt4BzCHAIgGMB7AE3TJmfDqRJA