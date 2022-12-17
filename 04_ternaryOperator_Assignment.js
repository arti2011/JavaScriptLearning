var interview=function(gradScore,hscScore,sscScore,name){
    var name="Arti";
    var result= (gradScore >= 70 ||hscScore>=80 ||sscScore > 90 ) 
    ? 'congrates Arti You are eligible for TCS interview'
    :"Unfortunately ${name} You are not eligible for interview";
    console.log(result);
}
interview(80,86,90,"Arti");

var interview=function(gradScore,hscScore,sscScore,name){
    var name="Apurva";
    var result= (gradScore >= 70 ||hscScore>=80 ||sscScore > 90 ) 
    ? 'congrates Apurva You are eligible for TCS interview'
    :"Unfortunately ${name} You are not eligible for interview";
    console.log(result);
}
interview(70,65,55,"Apurva");

var interview=function(gradScore,hscScore,sscScore,name){
    var name="Abhiraj";
    var result= (gradScore >= 70 ||hscScore>=80 ||sscScore > 90 ) 
    ? 'congrates Abhiraj You are eligible for TCS interview'
    :"Unfortunately Abhiraj You are not eligible for interview";
    console.log(result);
}
interview(60,79,88,"Abhiraj");



    
