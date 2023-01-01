console.log(`1.Class For Vehical`);
class Vehical{
    constructor(vehicalName,colour,engine,average,price){
        this.vehicalName = vehicalName;
        this.colour = colour;
        this.engine = engine;
        this.average = average;
        this.price = price;
    }
}
let Ciaz = new Vehical("Ciaze","White",1462,21,120000);
let RoyalEnfiled = new Vehical("Royal Enfield Classic 350","black",349,30,190092);
let Activa = new Vehical("Activa","Red",109,60,73500);
let Jupitar = new Vehical("Jupitar","Blue",105,55,70000);
let Swift = new Vehical("Suzuki Swift","white",125,58,8.8000);

console.log(Ciaz);
console.log(RoyalEnfiled);
console.log(Activa);
console.log(Jupitar);
console.log(Swift);
console.log("------------------------------------------------------------------------------------------------------");
console.log(`2.Class for College`);
class College{
    constructor(name,location,department,principal){
        this.name =name;
        this.location =location;
        this.department = department;
        this.principal = principal;
    }
    collegeDetails() {
        console.log(`Details of College are:`,this.name,this.location,this.departments,this.principal);
    }
}
let Sveri =new College("Sveri's","Phandharpur",6,"Dr.B.P.Ronge") 

let Sinhgad = new College("Sinhgad","Korti",5,"Dr.K.J.Karande")
let Fabtech = new College("Fabtech","sogola",7,"Dr.R.B.Shendage")
let NewSatara =new College("NewSatara","Korti",5,"Dr.A.A.Sagade")

console.log(Sveri);
console.log(Sinhgad);
console.log(Fabtech);
console.log(NewSatara);
console.log("-------------------------------------------------------------------------------------------");
console.log(`3.Traverse Object By Using for in loop`);
function traverseObject(Sveri){
    for (const key in Sveri) {
        if (Object.hasOwnProperty.call(Sveri, key)) {
            const element = Sveri[key];
            console.log(` ${key}: ${element}`);
        }
    }
}
traverseObject(Sveri);
console.log(`---------------------------------------------------------------------------------------------`);
traverseObject(Sinhgad);
console.log(`------------------------------------------------------------------------------------------------`);
traverseObject(Fabtech);
console.log(`-------------------------------------------------------------------------------------------------`);
traverseObject(NewSatara);