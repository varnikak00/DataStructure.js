let NumArr = new Array();
function ThreeDigitRandom(){
    let temp = Math.floor((Math.random()*1000)%1000);
    if(temp < 100){
        ThreeDigitRandom();
    }
    return temp;
}

for(let i=0;i<10;i++){
    NumArr.push(ThreeDigitRandom());
}
console.log(NumArr);

//finding second max
let temp = 0; 
first = NumArr[0];
second = NumArr[0];
for (let i=0; i<NumArr.length ; i++){
    if (first<NumArr[i])
    {
        second = first;
        first = NumArr[i];
    }
    else if (NumArr[i] > second && NumArr[i] != first)
    {
        second = NumArr[i];
    }
}
if (second == first){
    console.log("There is no second largest element\n");
}
else{
    console.log("\nThe Second largest element in the array is: "+ second);
}
console.log("first max :"+first+" second max "+second);

//finding min
first = NumArr[0];
second = NumArr[0];
for (let i=0; i<NumArr.length ; i++){
    if (first > NumArr[i])
    {
        second = first;
        first = NumArr[i];
    }
    else if (NumArr[i] < second && NumArr[i] != first)
    {
        second = NumArr[i];
    }
}
if (second == first){
    console.log("There is no second largest element\n");
}
else{
    console.log("The Second largest element in the array is: "+ second);
}
console.log("first min :"+first+" second max "+second);

//Q2 Sorting array
temp = 0;
let SortedNumArr = NumArr.sort();
console.log("second max "+SortedNumArr[(SortedNumArr.length -2)]+" second min "+SortedNumArr[1]);