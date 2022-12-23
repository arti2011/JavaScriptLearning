console.log("=======================1.==================================");
function factorial(n){
    if (n==0 || n==1) {
        return 1;
    } else {
        return n* factorial(n-1);

    }
}
var numResult = factorial(5);
console.log(`Factorial of number 5 is:`,numResult);

var numResult = factorial(7);
console.log(`Factorial of number 7 is:`,numResult);

var numResult = factorial(8);
console.log(`Factorial of number 8 is:`,numResult);

var numResult = factorial(12);
console.log(`Factorial of number 12 is:`,numResult);