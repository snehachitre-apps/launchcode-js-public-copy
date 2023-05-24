// FORK this starter file and save it to your own Repl.it account.
const input = require('readline-sync');
let astronautCount = Number(input.question('Enter Number of Astronauts: '));
console.log("\n");
// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
//let astronautCount = 7;
//this upper part has been customized for user input
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear";
//let weatherStatus = "storms expected";

//creating header format
let subHeading;
let headerFormat;
let clearForTakeOff = "YES";


headerFormat = "-------------------------------------\n" +

  "> " + subHeading + "\n" +

  "-------------------------------------\n";
// Write code to generate the LC04 report here:
subHeading = "LC04 - LAUNCH CHECKLIST";
createHeaderFormat(subHeading);
console.log("Date: " + date);
console.log("Time: " + time);
console.log("\n");

subHeading = "ASTRONAUT INFO";
createHeaderFormat(subHeading);
//console.log(headerFormat);
console.log("* count: " + astronautCount);
console.log("* status: " + astronautStatus);
console.log("\n");


subHeading = "FUEL DATA";
createHeaderFormat(subHeading);
console.log("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log("* Fuel level: " + fuelLevel);
console.log("\n");

subHeading = "MASS DATA";
createHeaderFormat(subHeading);
console.log("* Crew mass: " + crewMassKg + " kg");
console.log("* Fuel mass: " + fuelMassKg + " kg");
console.log("* Shuttle mass: " + shuttleMassKg + " kg");
console.log("* Total mass: " + totalMassKg + " kg");
console.log("\n");


subHeading = "FLIGHT PLAN";
createHeaderFormat(subHeading);
console.log("* weather: " + weatherStatus);
console.log("\n");


//Adding conditionals.
if (weatherStatus === "storms expected")
  clearForTakeOff = "NO";

subHeading = "OVERALL STATUS";
createHeaderFormat(subHeading);

if (clearForTakeOff === "NO")
  console.log("* Clear for takeoff: " + clearForTakeOff + "! Please Abort the  takeoff !");
else
  console.log("* Clear for takeoff: " + clearForTakeOff);
// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.

function createHeaderFormat(subHeading) {
  headerFormat = "-------------------------------------\n" +

    "> " + subHeading + "\n" +

    "-------------------------------------\n";
  return console.log(headerFormat);
}
