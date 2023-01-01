



function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 let s1 = new Student("Vinny", 111, 23);
 console.log(s1.rollNo);
 let s2 = new Student("Jenny", 22, 35);
 console.log(s1);

// let isInstance = studChetan instanceof Student;
//console.log(isInstance);
// Object is an instance of class

// function constructor
function Student(name, rollNo, age){
    this.name = name;
    this.rollNo = rollNo;
    this.age = age;
 }
 Student.prototype.country = "India";
 let vinny = new Student("Vinny", 111, 23);
 let jenny = new Student("Jenny", 44, 45);
 let minny = new Student("Minny", 55, 23);
 let tommy = new Student("Tommy", 66, 35);
 console.log(vinny);
 console.log(jenny);
 console.log(minny);
 console.log(tommy);
 console.log(vinny.country);
 console.log(minny.country);
 console.log(jenny.country);
 console.log(tommy.country);
 

 function Bank(BankName,location,ifscCode,branchCode){
    this.BankName = BankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode= branchCode;
 }
 let yesBank = new Bank("Yes Bank","Pune","YES2345","YES908222667");
 let Sbi = new Bank("SBI","Mumbai","SBI1245","SBI567445667");
 let AxisBank = new Bank ("AXIS Bank","Thane","AXIS5687","AXIS45000786");
 let MahBank = new Bank ("MAH Bank","Satara","MAH4532","MAH00008688")

console.log(`Bank details is:${yesBank}`);
console.log(Sbi);
console.log(AxisBank);
console.log(MahBank);
