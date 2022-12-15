var squareOfWordLength=function(value){
    console.log(`The length of word ${value} is:- ${value.length},& its square is:- ${value.length*value.length} `)

}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");
console.log(`--------------------------2.1-----------------------------------------`);
var newFunction = function(){
    var sentence = "I am Angular Developer";
    var myWord = sentence.split(" ");
    console.log(` Length of string is :- ${sentence.length}. Total no of words in string are :- ${myWord.length}.\n
    After dividing string length by total no of words is :- ${sentence.length/myWord.length}.`);
    console.log(`------------------------2.2-----------------------------------------`);
    console.log(` Multiplying string length with total words :- ${sentence.length*myWord.length}`);

}
newFunction();
    