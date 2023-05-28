// 1. Declare and assign the variables here:
let shuttleName = 'Determination';
let shuttleSpeed = 17500; //mph
let distanceToMars = 225000000;  //km
let distanceToMoon = 384400; //km
const milesPerKm = 0.621;

// 2. Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKm);





// Code your solution to exercises 3 and 4 here:
let milesToMars = distanceToMars * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeed;
let daysToMars = hoursToMars / 24;

console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")







// Code your solution to exercise 5 here:

let milesToMoon = distanceToMoon * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;

console.log(shuttleName + " will take " + daysToMoon + " days to reach Moon.")
