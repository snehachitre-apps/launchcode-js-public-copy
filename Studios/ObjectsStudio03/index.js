// Code your crewMass function here:

function crewMass(crew) {
  let crewMass = 0;

  for (let i = 0; i < crew.length; i++) {
    crewMass += crew[i].mass;
  }
  return Math.round(crewMass * 10) / 10;
}

// Code your fuelRequired function here:
function totalMass(rocketMass, crewMass) {
  return rocketMass + crewMass + safetySurplus(crew);
  // return totalMass * 9.5;
}
function fuelRequired(totalMass) {
  return Math.ceil(totalMass * 9.5);
}


function safetySurplus(crew) {
  let surplus = 0;
  for (let i = 0; i < crew.length; i++) {
    if (crew[i].species === 'cat' || crew[i].species === 'dog') {
      surplus += 200;
    }
    else {
      surplus += 100;
    }
  }
  return surplus;
}

function oxygenUse(crew) {
  let cadidate = crew[0];
  for (let i = 1; i < crew.length; i++) {
    if (crew[i].o2Used(1) < cadidate.o2Used(1)) {
      candidate = crew[i];
    }
  }
  return candidate;
}
// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
  'name': 'Gordon Shumway',
  'species': 'alf',
  'mass': 90,
  'o2Used': function(hrs) { return 0.035 * hrs },
  'astronautID': 414
};
let candidateB = {
  'name': 'Lassie',
  'species': 'dog',
  'mass': 19.1,
  'o2Used': function(hrs) { return 0.030 * hrs },
  'astronautID': 503
};
let candidateC = {
  'name': 'Jonsey',
  'species': 'cat',
  'mass': 3.6,
  'o2Used': function(hrs) { return 0.022 * hrs },
  'astronautID': 796
};
let candidateD = {
  'name': 'Paddington',
  'species': 'bear',
  'mass': 31.8,
  'o2Used': function(hrs) { return 0.047 * hrs },
  'astronautID': 291
};
let candidateE = {
  'name': 'Pete',
  'species': 'tortoise',
  'mass': 417,
  'o2Used': function(hrs) { return 0.010 * hrs },
  'astronautID': 599
};
let candidateF = {
  'name': 'Hugs',
  'species': 'ball python',
  'mass': 2.3,
  'o2Used': function(hrs) { return 0.018 * hrs },
  'astronautID': 890
};

let crew = [candidateB, candidateD, candidateF];
// let crew = [candidateA, candidateC, candidateE];

let totalCrewMass = crewMass(crew);
let rocketMass = 75000;

let selectCandidateByO2Used = oxygenUse(crew);
console.log(selectCandidateByO2Used);
let shuttleMass = totalMass(rocketMass, totalCrewMass)
console.log(`The mission has a launch mass of ${shuttleMass} kg and requires ${fuelRequired(shuttleMass)} kg of fuel.`)