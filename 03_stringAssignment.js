function stringTemplateAssign(){


console.log("===========================1.===========================");

console.log(`My dream company is "TCS" `);

console.log("============================2.1=============================");
var myHobbies1 ="Reading";
var myHobbies2 = "Cooking";
var myHobbies3 = "Learning New Things";
console.log(`My Hobbies Are ${myHobbies1},${myHobbies2},${myHobbies3}-----with variable substitution`);

console.log("============================2.2==============================");

console.log(`My Hobbies Are`, myHobbies1+`,`+ myHobbies2+ `and`+ myHobbies3+`------.concat`);
}
stringTemplateAssign();