const car = {
    carName : "Creta 5x",
    company : "Hundai",
    launchYear: 2017,
}

const carEngine ={
    enginePower : "1499CC",
    maxPower : "113 BHP",

}
console.log(`1.Merging two object by using object.assign`);
let mergeCar = Object.assign(car,carEngine);
console.log(mergeCar);
console.log(``);
console.log(`======================================================================================================`);
console.log(`1.Merging two object by using spread operator`);
let spreadCar = {...car,carEngine};
console.log(spreadCar);