


class Bank{
    constructor(bankName,location,accountNo,ifsc,interestRate){
this.bankName=bankName;
this.location=location;
this.accountNo=accountNo;
this.ifsc=ifsc;
this.interestRate=interestRate;
    }
}
console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(`A) Created the class and added deta members`);
console.log(`---------------------------------------------------------------------------------------------------------`);
let axisBank=new Bank("Axis Bank","Phandharpur",65895432890,54678,"5%","");
let sbiBank=new Bank("State Bank ","Solapur",78690543215,67896,"6%");
let icicBank=new Bank("ICIC Bank","Mumbai",67890003214,87654,"1%");
let kotakBank=new Bank("Kotak Bank","Solapur",12345432567,12321,"4%");
let hdfcBank=new Bank("HDFC Bank","Kholapur",67589009876,09876,"7",);
let punjabBank=new Bank("Punjab Bank","pune",46765438299,78654,"6%");
console.log(`B) Created Objects ofvarious banks`);
console.log(`---------------------------------------------------------------------------------------------------------`);
console.log(axisBank);
console.log(sbiBank);
console.log(icicBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);
console.log(`----------------------------------------------------------------------------------------------------------`);
console.log(`C) Create the map in such a way that key should be bank account number and value is object`);
console.log(`Account number as key:-`);
const details= new Map()
details.set(65895432890,axisBank)
details.set(78690543215,sbiBank)
details.set(67890003214,icicBank)
details.set(12345432567,kotakBank)
details.set(67589009876,hdfcBank)
details.set(46765438299,punjabBank)

const keyOfMapDetails = details.keys();
console.log(keyOfMapDetails);
console.log(`----------------------------------------------------------------------------------------------------------`);
console.log(`D) Traverse the map and log bank name , account number and interest rates.`);
for (const iterator of keyOfMapDetails) {
  const employee = details.get(iterator);
  console.log(`Bank Name : ${employee.bankName} Account No: ${employee.accountNo} Interest Rate: ${employee.interestRate}`);
  
}