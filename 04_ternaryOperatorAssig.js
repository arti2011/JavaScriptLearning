var myFunction=function(){
var num1=10;
var num2=-10;
var result=num1>num2 ?`The greatest number among "10" and "-10" is 10`:
`The greatest number among "10 " and "-10" is -10`;
console.log(result);
var value1=800;
var value2=899;
var result1=value1>value2 ?`The greatest number among "800" and "899" is 800`:
`The greatest number among "800 " and "899" is 899`;
console.log(result1);
}
myFunction();
console.log("=========================================================================");

var evenOdd=function(value){
    var result=value%2==0 ? "True " :" False";


    console.log(`This value ${value} is Even No:${result}`);
}
evenOdd(29);
evenOdd(44);
evenOdd(0);
evenOdd(101);

console.log("================================================================================");
 var words=function(name){
    var length=name.length;
    var string=length%2==0 ? "EVEN" :  "ODD" ;
    console.log(`The length of word ${name} ${string}`);

 }
 words("Javascript");
 words("developer");
 words("Google");