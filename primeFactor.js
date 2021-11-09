let digit = 45;
let DivisorArr = new Array();
let PrimeDivisorArr = new Array();
let isPrime = true;
for(let i=0;i<digit;i++){
    if(digit%i==0){
        DivisorArr.push(i);
        for(let j=2;j<i;j++){
            if(i%j == 0){
                isPrime = false
                break;
            }
        }
        if(isPrime){
            PrimeDivisorArr.push(i);
        }
    }
}
console.log("Divisor "+DivisorArr);

console.log("Prime divisor "+ PrimeDivisorArr);
