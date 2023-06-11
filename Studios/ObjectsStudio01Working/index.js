
let idNumbers = [291, 414, 503, 599, 796, 890];



// Code your selectRandomEntry function here:
function randomSelection(arr) {
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
let crewIDs = [];
while (crewIDs.length < 3) {
  id = randomSelection(idNumbers);
  if (!crewIDs.includes(id)) {
    crewIDs.push(id);
  }
}

console.log(crewIDs);
// Code your buildCrewArray function here:



// Here are the candidates and the 'animals' array:
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
let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

let crew = [];

function buildCrewArray(crewIDs, animals) {

  for (let i = 0; i < animals.length; i++) {
    if (crewIDs.includes(animals[i].astronautID)) {
      crew.push(animals[i]);
    }
  }
  return crew;
}
// console.log(crew);
// Code your template literal and console.log statements:
crewMembers = buildCrewArray(crewIDs, animals);
console.log(crewMembers);

console.log(`${crewMembers[0].name}, ${crewMembers[1].name}, and ${crewMembers[2].name} are going to space!`);
