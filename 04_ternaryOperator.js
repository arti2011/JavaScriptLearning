console.log("============================1============================");

function maleMarriageElibigility(gender,age,boyName){
var result =(gender=="male"  &&  age >=21) ?`Hey Bill Gates you are eligible for marriage`:`Hey Bill Gates you are
not eligible for marriage`;
console.log(result);
}
maleMarriageElibigility("male",25,"Bill Gates");

function maleMarriageElibigility1(gender,age,boyName){
    var gender =(gender=="male" && age>=21) ?`Hey Stew Jobs you are eligible for marriage`:
    `Hey Stew Jobs you are not eligible for marriage`;
    
    console.log(gender);
}
maleMarriageElibigility1("male",17,"Stew Jobs");
console.log("===============================2==============================");
function femaleMarriageElibigility(gender,age,girlName){
    var femaleresult =(gender=="female"  &&  age >=18) ?`Hey Jenifer you are eligible for marriage`:`Hey Jenifer you are
    not eligible for marriage`;
    console.log(femaleresult);
    }
    femaleMarriageElibigility("female",25,"Jenifer");
    
    function femaleMarriageElibigility1(gender,age,girlName){
        var femaleresult =(gender=="female"  &&  age >=18) ?`Hey Malinda Gates you are eligible for marriage`:
        `Hey Malinda Gates you are not eligible for marriage`;
        
        console.log(femaleresult);
        }
        femaleMarriageElibigility1("female",27,"Malinda Gates");
        