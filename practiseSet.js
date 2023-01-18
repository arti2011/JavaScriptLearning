console.log("=====if else=====");
let diffrence = function (age) {
  if (age >= 20) {
    console.log(`congratulation you can vote: ${age}`);
  } else {
    console.log(`sorry you are not eligible:${age}`);
  }
};
diffrence(8);
diffrence(10);
diffrence(21);
diffrence(11);
console.log(`-------switch case------------`);
function oneWeek(weekNumber) {
  switch (weekNumber) {
    case 1:
      console.log(`1:Sunday`);
      break;
    case 2:
      console.log(`2:Monday`);
      break;
    case 3:
      console.log(`3:Tuesday`);
      break;
    case 4:
      console.log(`4:Wednesday`);
      break;
    case 5:
      console.log(`5:Thursday`);
      break;
    case 6:
      console.log(`6:Friday`);
      break;
    case 7:
      console.log(`Saturday`);
    default:
      break;
  }
}
oneWeek(3);
oneWeek(6);
oneWeek(1);
console.log("----no divisible by 2 & 3-------");
let divisible=function(num){
    if (num%2==0  && num%3==0) {
      console.log(`Your no divisible by 2 :${num}`)
    }
    else{
        console.log(`Your no not divisible by 3:${num}`);
    }
}
divisible(12);
divisible(35);
divisible(11);

console.log(string);
var string = "I am Arti"
console.log(`Given string is: ${string}`);
console.log(string[4]);

console.log(`For loop`);
for (let index = 0; index <= 10; index++) {
  const element = [index];
  console.log(element);
  
}
console.log(`for in`);
/*for (const key in object) {
  if (Object.hasOwnProperty.call(object, key)) {
    const element = object[key];
    
  }
}
console.log(``);
let marks ={
  arti:87,
  apurva:67,
  onkar:70,
}
for (let index = 0; index < object.keys(marks).length; index++) {
  const element = marks[index];
  console.log(marks);
  
}*/

let name = "my name is arti";
console.log(name.length);
console.log(name[6]);

let expr ="bana/na"
console.log(expr);
console.log(`=====================================================`);  
number = [1, 3, 4, 6, 10];
 const   indexOF6  =number.indexOf(6);
 console.log(indexOF6);
 console.log(``);
 console.log(`traverse array in reverse ordar`);
 const array =[4, 6, 7, 8, 3 , 2];
 for (let index =(array.length-1) ; index >0; index--) {
  const element = array[index];
  console.log(element);
 }
 console.log(`========for  loop traversing array==========`);
 const fruits = ["apple", "mango", "orange", "banana", "watarmelon","strawbary"]
 for (let index = 0; index < fruits.length; index++) {
  const element = fruits[index];
  console.log(element);
 }
 console.log(`=====================for in loop ====================`);
 for (const element in fruits) {
   
    console.log(fruits[element]);
 } 
  console.log(`includs() to check given no is present =============`);
  const arrays =[4, 6, 7, 8, 3 , 2];
  const  toCheck  = arrays.includes(3);
  const toCheck1= arrays.includes(0)
  console.log(toCheck1);
  console.log(toCheck);
  console.log(`join method ()===========`);
  const words =["my", "name", "is", "arti"]
  console.log(words.join());
  console.log(`concate array=========`);
  const  array1 =[1, 3, 4, 5, 6]
  const array2 =["my", "name", "is", "arti" ];
  const array4 = [ 23, 54, 87, 87]
   const array3 =     array1.concat(array2,array4 )
   console.log(array3);

   console.log(`resize array========`);
   const array5 = [ 23, 54, 87, 87, 65,98, 90];
     console.log(array5.length);
     array5.length = 4;
     console.log(array5.length);