let dice = 0 
let count = 0;
let DiceMap = new Map([[1,0],[2,0],[3,0],[4,0],[5,0],[6,0]]);

let keepLoop = true;
while(keepLoop){
    dice = Math.floor( (Math.random() * 6) +1 );
    switch(dice){
        case 1:
            count = DiceMap.get(1);
            count++;
            DiceMap.set(1,count);
            break;
        case 2:
            count = DiceMap.get(2);
            count++;
            DiceMap.set(2,count);
            break;
        case 3:
            count = DiceMap.get(3);
            count++;
            DiceMap.set(3,count);
            break;
        case 4:
            count = DiceMap.get(4);
            count++;
            DiceMap.set(4,count);
            break;
        case 5:
            count = DiceMap.get(5);
            count++;
            DiceMap.set(5,count);
            break;
        case 6:
            count = DiceMap.get(6);
            count++;
            DiceMap.set(6,count);
            break;
    } 
    for ( let [key,value] of DiceMap){
        if(value == 10){
            console.log(key+" appread 10 times");
            keepLoop = false;
            break;
        }
    }
}
//Display all elements in map
for(let [key,value] of DiceMap){
    console.log("key is "+key+" value is "+value);
}
