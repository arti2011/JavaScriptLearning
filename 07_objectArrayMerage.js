console.log("1.Creating Object Of personal Details");
const persanalDetails = {
  name: "Arti Salunkhe",
  education: "Btech-Civil",
  age: 23,
  mobile: 7709656236,
};
console.log(persanalDetails);
console.log(``);
console.log("2.Creating Object Of College Details");
const collegeDetails = {
  college: "Sveri's COEP ",
  location: "Phandharpur",
  university: "Solapur",
  deparments: 5,
};
console.log(collegeDetails);
console.log(``);
console.log("3.Aftar Merging 2 Object and logging details");
const mergedObject = Object.assign({}, persanalDetails, collegeDetails);
console.log(mergedObject);
console.log(``);

console.log("4.Creating Array of friends name & fressze");
let array = ["Nisha", "Shital", "Minal", "Ashu","Amir","Samadhan","Suraj","Ajinkya"];
Object.freeze(array);
console.log(array);
console.log(``);
console.log("5.Iterating step 4 using for of loop & log friends name");
for (const iterator of array) {
  console.log(iterator);
  console.log(``);
}
console.log("6.Reverse string technology");
let string = " Codmind Technology";
function reverse(array) {
  return array.split("").reverse().join(" ");
}
console.log(``);
console.log(`Codmind`, reverse(`Technology`));
