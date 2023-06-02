let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().
let newStrArr = str.split(",");
console.log(newStrArr);

//b) Use the join method on the array to identify the purpose of the parameter inside the ().
let newStr = newStrArr.join(",");
console.log(newStr);



//c) Do split or join change the original string/array?

//yes.  split splits string to array based on delimiter 
// join joins array based on delimiter into string. 
console.log("Yes it changes original string/array. \n split splits string to array based on delimiter.\n join joins array based on delimiter into string. ");

//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
let cargoHoldArr = cargoHold.split(",");
console.log(cargoHoldArr);