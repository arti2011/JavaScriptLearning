var foo =1;

function myFun(){
    console.log(foo);
    var foo=2;
}
myFun();
console.log("===========Function with no argumrnts and no return type=================");
function myProfile(){
  console.log("Name:Arti Haridas Salunkhe");
  console.log("Education:Btech Civil Engineering");
  console.log("Mobile No:7709656236");
  
}
myProfile();// function call or function invocation
function show(){
    console.log("Sveri's college phandharpur");
}
show();
console.log("===========function with arguments and no return type=================");
function showDetails(myName){
console.log("Details",myName);
}
showDetails("Arti Salunkhe");

function rajuBhaya(paisa,bag,mobile){
    console.log(paisa);
    console.log("bag");
    console.log("mobile");
}
rajuBhaya(100, "mobile", " bag" );

console.log("---------------------------------------------------");
function swapValues(val1,val2){
    console.log("before Swap",val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("Afatar swap",val1,val2);
}
swapValues(100,200);
swapValues(2,4);
swapValues("Arti","Anita");
swapValues("you","me");
console.log("---------------------------------------------------");

console.log("==========")



//function Expression      (we can store function as value)
var substraction= function(num1,num2){
    var result=num1-num2;
    console.log("substraction",result);
return result;
}
var result=substraction(45,34);

