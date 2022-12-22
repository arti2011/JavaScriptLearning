console.log("===========================1.=================================");
// count the total number charactar `a` or `A`
function countCharA(string) {
  console.log(string);
  var counter = 0;
  for (let index = 0; index < string.length; index++) {
    var char = string.charAt(index);
    var charCopy = char.toLowerCase(index);
    if (charCopy == `a`) {
      counter = counter + 1;
    }
  }
  console.log(`Total number of a or A given string is:${counter}`);
}
countCharA(" I Am learning javascript,The language of internet");
console.log("=========================2.===================================")
countCharA(" My favourite movie is LAggAn");
