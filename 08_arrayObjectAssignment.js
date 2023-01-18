console.log(`A.creating a class "Bank" with data members `);
console.log(`B.creating object of bank..`);
class   Bank {
constructor(bankName,location,accountNo,ifsc,interestRate){
    this.bankName =bankName,
    this.location =location,
    this.accountNo=accountNo,
    this.ifsc = ifsc,
    this.interestRate=interestRate
}
}
let axisBank = new Bank ("AXIS Bank", "sagola", "AX00048665", 9824,9);
let sbiBank = new Bank ("SBI","Mumbai","SBI1245","SBI567445667",4537,8)
let icicBank = new Bank ("ICIC Bank","pune","ICIC456876",7689,6)
let kotakBank = new Bank ("Kotak Bank","solapur","KKBK000996",4576,8)
let hdfcBank = new Bank ("HDFC Bank","phandharpur","HDFC6789053",7894,9)
let panajabBank = new Bank ("Panjab Bank","kholapur","PUNB657894",6783,6)
console.log(axisBank);
console.log(sbiBank);
console.log(icicBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(panajabBank);

console.log(`=======================================================================================================`);
console.log(`C.Aftar addind all elements in array using for loop `);
const newArray =[
    axisBank,
    sbiBank,
    icicBank,
    kotakBank,
    hdfcBank,
    panajabBank
];

for (const element of newArray) {
    console.log(`Bank name is :- ${element.bankName},Location is :-${element.location}`);
}
console.log(`=====================================================================================================`);
console.log(`D.find the Object with name kaotak bank using for loop`);
for (const element of newArray) {
    if((bankName = "kotakBank")){
        console.log(kotakBank);
        break;
    }
    
}
console.log(`===================================================================================================`);
console.log(`E.logging  details on console using for loop`);
for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    console.log(element);
    
}

