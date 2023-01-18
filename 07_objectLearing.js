const person = {
    name  :"arti",
    age   :23,
    height: 5.4,
    hairs : "long",
    weigh : 40,
    // nested object
    marks:{
        science : 65,
        maths : 80,
        biology : 76,
    }
}
console.log(person);

console.log(person.marks);
//accesing property of marks and object
console.log(person.marks.science);

console.log(`for in........`);
for (const key in person) {
     {
       
        console.log (`${key} => ${person[key]}`);
    }
}
console.log(`object with class keyword`)
 
