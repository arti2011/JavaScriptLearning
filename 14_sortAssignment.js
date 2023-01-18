console.log(`--------------------------------------------------------------------------------------------------`);
const array_roll_numbers  = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ]
console.log(`Given Array is`);
console.log(array_roll_numbers);
console.log(`------------------------------------------------------------------------------------------`);
console.log(`1) reverse the array.`);

array_roll_numbers.reverse();
console.log(array_roll_numbers);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`2) use sort () without any custom logic`);
array_roll_numbers.sort();
console.log(array_roll_numbers);
console.log(`----------------------------------------------------------------------------------------`);
console.log(`3) Sort the array in ascending ordar `);
array_roll_numbers.sort((a,b) =>{
    return a>b ? 1 :-1
})
console.log(array_roll_numbers);
console.log(`-------------------------------------------------------------------------------------------`);
console.log(`4) Find greatest number from the array.`);
console.log(array_roll_numbers);
console.log(`the greatest number from array is:-${array_roll_numbers[9]}`);

console.log();

console.log(`----------------------------------------------------------------------------------------------`);
console.log(`5)Find smallest number from the array.`);
console.log(array_roll_numbers);
console.log(`the smallest number from array is:-${array_roll_numbers[0]}`);


console.log(`-----------------------------------------------------------------------------------------------`);
console.log(`6) Remove duplicate number from array`);

const mySet = new Set(array_roll_numbers);
console.log(mySet);
