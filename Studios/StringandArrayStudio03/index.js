let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinet=food.split(",").sort();
let equipmentCabinet = equipment.split(",").sort();
let petsCabinet = pets.split(",").sort();
let sleepAidsCabinet = sleepAids.split(",").sort();

//console.log(foodCabinet);


//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold= [];
cargoHold.push(foodCabinet,equipmentCabinet,petsCabinet,sleepAidsCabinet);
console.log(cargoHold);


//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input= require('readline-sync');
let cabinet=Number(input.question("Please select from cabinets: \n\t0 - food\n\t1 - equipment\n\t2 - pets\n\t3 - sleepAids\n\n You choose number:"));



//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (cabinet>3)
   console.log(`You chose ${cabinet} which is not in 0-3. Please choose within listed numbers.`);
else
  console.log(`You chose cabinet ${cabinet}. Contents of this cabinet are ${cargoHold[cabinet]}`);

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let item=input.question("Are you looking for something in this cabinet? :");
if (cargoHold[cabinet].includes(item))
  console.log(`Cabinet ${cabinet} DOES contain ${item}`);
else
  console.log(`Cabinet ${cabinet} DOES NOT contain ${item}`);
