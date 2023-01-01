function countCharA(sentence){
    counter=0;
    for(let index=0;index<=sentence.length;index++)
    {
         var char=sentence.charAt(index);
        if(char=='A' || char=='a')
        {
            counter=counter+1;
        }
    }
    console.log(`${sentence}`);
    console.log(`Total Number of 'A' or 'a' in the given String is :${counter}`);
}
countCharA('"I Am Learning JavaScript ,The Language of Internet"');
console.log(`--------------------------------------------------------------------`);
countCharA(`"My Favourite movie is LAggAn"`);
console.log("=====================================================================================");
function factorialNumber(num){
    let result =num;
    if (num===0  ||  num===1)
    return 1;
    while (num>1){
        num--;
        result *=num;
    }
return result;
}
factorialNumber(5);
factorialNumber(7);
factorialNumber(8);
factorialNumber(12);