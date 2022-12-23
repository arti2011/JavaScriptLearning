//var string = "I am very good IT Developer "
//console.log(`Given string is : ${string}`);

function countCharA(sentence){
    counter=0;
    for(let index=0;index<=sentence.length;index++)
    {
         var char=sentence.charAt(index);
        if((char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || 
        char=='A' || char=='E' || char=='I' || char=='O' || char=='U'))
        {
            counter=counter+1;
        }
    }
    console.log(`${sentence}`);
    console.log(`Total Number of vowels in the  String is :${counter}`);
}
countCharA('I am very good IT Developer');
console.log("===============================2.==========================================");
// WAP to get the sum of cube of no from 1to 5

function sumOfCubes(num){
    let sumNum=0;
    for (let index = 0; index <= num; index++) {
       sumNum+=index**3 
        
    }
    return sumNum;
}
console.log(`The sum of cube number from 1 to 5 is:`,sumOfCubes(5));
console.log("================================3.============================================");
function oddPositionedChars(string){
    console.log(`The Given string is:${string}.`);
var emptyString="";
var myString=string.split(" ").join ("");
console.log(myString);
for (let index = 0; index < myString.length; index++) {
    if(index % 2 !=0){
        emptyString=emptyString+myString[index];
    }
    
}
console.log(`Odd positioned chars in the string is : ${emptyString}`);
}
oddPositionedChars("Hard work always pays back");
console.log("=========================================================================");
oddPositionedChars("Soon I will be Angular IT champ");
    