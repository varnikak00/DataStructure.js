let keyString = "a String";
let keyObj = {};
let keyFunc = function(){}
//setting the values
let myMap = new Map();
myMap.set(keyString,"value associate with 'a string'");
myMap.set(keyObj,"Value assosiate with keyobj");
myMap.set(keyFunc,"Value associate with key func");

//getting the value 
let size = myMap.size;
let valStr = myMap.get(keyString);
let isKeyExit = myMap.has('a string');

for (let [key, value] of myMap){
    console.log("loop 1: "+key+" = "+value);
}
//looping using entries
for(let [key,value] of myMap.entries()){
    console.log("loop2 :"+key+" = "+value);
}
//looping using keys
for (let key of myMap.keys()){
    console.log("key ="+key);
}
//fetching only value
for ( let value of myMap.values()){
    console.log("value = "+value);
}

//Merge two map
let first = new Map([ [1,"One"],[2,"Two"],[3,"Three"]]);
let second = new Map([ [1,"uno"],[2,"dos"] ]);
let merged = new Map([...first,...second,[1,'eins']]);
console.log("merged map is "+merged)
let hasKey = merged.has(1);
let delKey = merged.delete(1);
if(merged.has(1))
{
    console.log(merged.get(1));
}
console.log("Pos 2: "+merged.get(2));
merged.clear();
console.log(merged.size);
