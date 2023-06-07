let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6
};

let dog = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5
};

let tardigrade = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1
};
// After you have created the other object literals, add the astronautID property to each one.
// superChimpOne["astronautID"] = 1;
// superChimpTwo["astronautID"] = 2;
// salamander["astronautID"] = 5;
// dog["astronautID"] = 4;
// tardigrade["astronautID"] = 10;

//adding move method
superChimpOne["move"] = function() { return Math.floor(Math.random() * 11) };
superChimpTwo["move"] = function() { return Math.floor(Math.random() * 11) };
salamander["move"] = function() { return Math.floor(Math.random() * 11) };
dog["move"] = function() { return Math.floor(Math.random() * 11) };
tardigrade["move"] = function() { return Math.floor(Math.random() * 11) };
// Create an array to hold the animal objects.
let crew = [superChimpOne, superChimpTwo, dog, salamander, tardigrade];
// Print out the relevant information about each animal.
//generating random numbers for astronoaut ID 

randomIDs = [];
while (randomIDs.length < crew.length) {
  id = Math.floor(Math.random() * 10) + 1;

  if (randomIDs.indexOf(id) < 0) {
    randomIDs.push(id);
  }
}
for (let i = 0; i < crew.length; i++) {
  crew[i]["astronautID"] = randomIDs[i];
  console.log(`Crew member ${crew[i].name} : Unique Astronoaut ID ${crew[i].astronautID}`);
}


console.log();


function crewReports(animal) {

  return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

console.log(crewReports(superChimpOne) + '\n');
console.log(crewReports(superChimpTwo) + '\n');
console.log(crewReports(dog) + '\n');
console.log(crewReports(salamander) + '\n');
console.log(crewReports(tardigrade) + '\n');
// Start an animal race!
let numberOfTurnsPerAnimal = [];

function fitnessTest(crew) {

  for (let i = 0; i < crew.length; i++) {
    let turns = 0;
    let steps = 0;
    while (steps < 20) {
      steps += crew[i].move();
      turns++;
    }
    numberOfTurnsPerAnimal.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);

  }

  return numberOfTurnsPerAnimal;

}

console.log(fitnessTest(crew));