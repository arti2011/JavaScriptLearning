var string = "     Hey you are doing good, keep it up     ";
console.log(`Given string is`,string);
var show=string .length;
console.log(`string length`,show);
var show=string.toLocaleLowerCase;
var a=string.includes;
console.log(`lowar case`,a);


function gradeCalculation(marks){
    if ((marks >=90)  &&  (marks<=100)) {
       console.log(`Funtastic marks:- &{mark},Your grade is A+`);
    }
    if ((marks >=75)  &&  (marks<90)) {
       console.log(`Excellent marks:- &{mark},Your grade is A`);
    }
    if ((marks >=50)  &&  (marks<=100)) {
       console.log(`Good marks:- &{mark},Your grade is B`);
    }
    if ((marks >=35)  &&  (marks<50)) {
       console.log(` marks is:- &{mark},Your grade is c, Need improvement`);
    }
    if ((marks <=0)  &&  (marks>100)) {
       console.log(` marks:- &{mark},Plese provide the valid marks`);
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
 