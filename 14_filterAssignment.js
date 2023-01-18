class Employee {
    constructor(empId,empName,empDept,empSalary,empCompany){
        this.empId = empId;
        this.empName = empName;
        this.empDept = empDept;
        this.empSalary = empSalary;
        this.empCompany = empCompany;
    }
} 
const empAnil = new Employee(22,"Anil","IT",50000,"TCS");
const empRadha = new Employee(33,"Radha","HR",74000,"Wipro");
const empRishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const empMonika = new Employee(77,"Monika","IT",40000,"Wipro");
const empViny = new Employee(88,"Viny","IT",75000,"TCS");
const empMahi = new Employee(99,"Mahi","HR",850000,"Infy");

console.log(`1.--------------------  'TCS' employee details-----------------------------------`);
console.log(``);
const employees = [empAnil, empRadha, empRishi, empSonali, empMonika, empViny, empMahi]
employees.filter((employee) => {
    if (employee.empCompany=="TCS") {
        console.log(`Employee name is: ${employee.empName},`,`Company is: ${employee.empCompany}`);
    }
});