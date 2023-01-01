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