let DoubleDigit = new Array();
for(let i=1;i<=100;i++){
    if(i%11==0){
        DoubleDigit.push(i);
    }
}
console.log("Double digit : "+DoubleDigit);