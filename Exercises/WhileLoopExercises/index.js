//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel = 0;
let numberOfAstronoauts = 0;
let maxShuttleAltitude = 0;
// let fuelStatus;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync');
startingFuelLevel = Number(input.question("Please enter starting fuel level (5000-30000): "));

while (startingFuelLevel < 5000 || startingFuelLevel > 30000 || startingFuelLevel==0) {
  startingFuelLevel = Number(input.question("Please enter valid fuel level (Between 5000 to 30000): "));
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numberOfAstronoauts = Number(input.question("Please enter number of Astronauts onboard (1-7): "));
while (numberOfAstronoauts < 1 || numberOfAstronoauts > 7) {
  numberOfAstronoauts = Number(input.question("Astronauts count should be in range 1-7 only.: "));
}




//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.


while ((startingFuelLevel - 100 * numberOfAstronoauts) >= 0) {
  startingFuelLevel -= 100 * numberOfAstronoauts;
  maxShuttleAltitude += 50;
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${maxShuttleAltitude} km. The fuel status is ${startingFuelLevel} gallons.`);

if (maxShuttleAltitude >= 2000)
  console.log(`Orbit achieved!`);
else
  console.log(`Failed to reach orbit.`);
