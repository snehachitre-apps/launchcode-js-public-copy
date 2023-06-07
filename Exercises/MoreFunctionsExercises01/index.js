function checkFuel(level) {
  if (level > 100000) {
    return 'green';
  } else if (level > 50000) {
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr) {
  if (arr.length < 7) {
    return `Spaces available: ${7 - arr.length}.`;
  } else if (arr.length > 7) {
    return `Over capacity by ${arr.length - 7} items.`;
  } else {
    return "Full";
  }
}

let suspicious = function(level) {
  if (checkFuel(level) === 'green')
    return level - 100001;
  else if (checkFuel(level) === 'yellow')
    return level - 50001;
  else
    return level;

};

// let fuelLevel = 200000;
let fuelLevel = 60000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

// console.log(fuelLevel);
// console.log("Fuel level: " + checkFuel(fuelLevel)); //orognal
// console.log("Hold status: " + holdStatus(cargoHold)); //original
// //after hacking
// console.log(fuelLevel);
// console.log(suspicious(70000));
// console.log("Fuel level: " + checkFuel(fuelLevel));
// console.log("Hold status: " + holdStatus(cargoHold));


let stolenObjects = [];
let suspiciousCargo = function(susArray) {
  let innocentArray = susArray;

  for (let i = 0; i < cargoHold.length; i++)
    if (!(innocentArray[i] === 'water' || innocentArray[i] === 'first-aid kit' || innocentArray[i] === 'meal kits')) {
      //innocentArray.splice(i,1);
      stolenObjects.push(innocentArray[i]);
      innocentArray[i] = 'gravel';
    }
  return stolenObjects;
};

// console.log(suspiciousCargo(cargoHold));
// //stolen objects
// console.log(stolenObjects);


let irs = function(fuelLevel, cargoHold) {
  let stolenFuel = suspicious(fuelLevel);

  return `Raided ${stolenFuel} kg of fuel from the tanks, and stole ${suspiciousCargo(cargoHold)} from the cargo hold.`;

};

console.log(irs(70000, cargoHold));