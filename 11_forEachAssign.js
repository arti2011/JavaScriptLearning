console.log(`-----------Assignment No 2--------------------`);
const arrayNum =[1,-7,40,502,-77,91,0,108,89,-601]
console.log(`Given araay is:>`,arrayNum);
console.log(`1) log the array element with its index using for each with arrow function`);
arrayNum.forEach((currentValue,index)=>{
    console.log(`Value in array :->`,currentValue,`index is`,index);
});
console.log(`----------------------------------------------------------------------------`);
console.log(`2) positive number in given array is`);
const positiveArray =[];
arrayNum.forEach((currentValue)=>{
    if(currentValue > 0 ){
        positiveArray.push(currentValue);
    }
});
console.log(positiveArray);
console.log(`--------------------------------------------------------------------------------`);
console.log(`3) Negative number in given array is`);const negativeArray =[];
arrayNum.forEach((currentValue)=>{
    if(currentValue < 0 ){
        negativeArray.push(currentValue);
    }
});
console.log(negativeArray);
console.log(`---------------------------------------------------------------------------------`);
console.log(`4) Even number in given array is`);
const arrayOfEven = []
arrayNum.forEach((currentValue)=>{
    if(currentValue %2==0){
arrayOfEven.push(currentValue);
    }
});
console.log(arrayOfEven);
console.log(`----------------------------------------------------------------------------------`);
console.log(`5) find sum of all the value ingiven array is`);
let sum = arrayNum.reduce(function(a,b){
return a+b;
});
console.log(`Sum of all values in the given array is:->,${sum}`);
console.log(`-----------------------------------------------------------------------------------`);
console.log(`6) Find the even positioned values`);
const newArray = [];
arrayNum.forEach((currentValue,index)=>{
    if(index %2==0){
        newArray.push(currentValue);
    }
});
console.log(newArray);


