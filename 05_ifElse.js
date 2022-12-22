console.log("===================1.======================================");
var votingEligibility = function (age){
    if (age<=0 || age>120) {
        console.log(`Invalid data:Because youe age is ${age}`);
    } else {
       
       if (age>=18) {
        console.log(`Your Given age is ${age} : congratulation you are are eligible for voting: ${age}`);
       }else{
        console.log(`Your Given age is${age}:sorry you are not  eligible for voteing`);
       }
       
        
       
        
       }
    }
votingEligibility(45);
votingEligibility(17);
votingEligibility(8);
votingEligibility(20);
votingEligibility(200);
votingEligibility(-20);
votingEligibility(0);

console.log("=====================2.========================================");
function gradeCalculation(marks){
    if ((marks>=90)  &&  (marks<=100)) {
       console.log(`Funtastic marks :-${marks}, Your grade is A+`);
       
    }
    if ((marks>=75)  &&  (marks<90)) {
       console.log(`Excellent marks :-${marks}, Your grade is A`);
    }
    if ((marks>=50)  &&  (marks<75)) {
       console.log(`Good marks :-${marks}, Your grade is B`);
    }
    if ((marks>=35)  &&  (marks<50)) {
       console.log(`marks is ${marks}, Your grade is C, Need improvment`);
       
    }
    if (marks==0 || marks<0 || marks>100 ||(typeof marks)!="number" ){
     
       console.log(`marks Are :- ${marks}, Please provide the valid marks`);
    }
 }
 
 gradeCalculation(98);
  gradeCalculation(80);
  gradeCalculation(90);
  gradeCalculation(0);
  gradeCalculation(150);
  gradeCalculation(-7);
  gradeCalculation(35);
  gradeCalculation(29);
  gradeCalculation(64);
  gradeCalculation(49);



  console.log(================================================================);
  // Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var i=0;  // i = 0 1 2  10  11
while (i<=10) {  // true true 
   console.log(i);  //0 1 2   10
   i++; // 1 2  10  11
}

console.log("==============================================");
// Print numbers from 0 to 10
// initialization 0   condition <=10   update expre = ++
var index =0;
do {
    console.log(index);
    index++;
} while (index<=10);

// Print 70 to 7 by decrementing each time 7
 // 70  63  56  
var index =70;
do {
  console.log(index);
   index = index-7; 
} while (index>=7);
