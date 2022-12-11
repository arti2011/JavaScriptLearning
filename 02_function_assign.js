console.log("===========Question 1st==================")
function display(){
    console.log("JavaScript");
    console.log("Angular");
}
display();
console.log("=============Question 2nd================")
function personalDetails(){
    console.log(" First name = Arti");
    console.log(" Last name = Salunkhe");
    console.log("Shri Vithal Education & Research Institue's College of Engineering Phandharpur");
}
personalDetails();
console.log("==============Question 3rd===================")

function swapValuesDude(value1,value2){
    console.log("Before swap",value1,value2);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log("After swap",value1,value2);
}
swapValuesDude("Virat","Anuska");

function swapValuesDude(value1,value2){
  console.log("=====Before swap====");
  console.log(value1,value2);
  var temp=value1;
  value1=value2;
  value2=temp;
  console.log("=====After swap====");
  console.log(value1,value2);
}
swapValuesDude(1000,2000);
console.log("===========Question 4th==================")
function addThreeValues(val1,val2,val3){
    
    console.log("Addition of Three Values:",val1+val2+val3);
    return "addition"
}
var addition=addThreeValues(10.23,600,40);
var addition=addThreeValues("Hello","Good","Morning");


