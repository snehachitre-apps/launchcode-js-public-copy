var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfig({
  spec_dir: 'spec',
  spec_files: [
    "**/*[sS]pec.js"
  ],
});

function launchOutput(number) {
  let output = "";

  if (number % 2 === 0) {
    output = 'Launch!';
  }
  if (number % 3 === 0) {
    output = 'Code!';
  }
  if (number % 5 === 0) {
    output = 'Rocks!';
  }
  if (number % 2 === 0 && number % 3 === 0) {
    output = 'LaunchCode!';
  }
  if (number % 5 === 0 && number % 3 === 0) {
   output = 'Code Rocks!';
  }
  if (number % 5 === 0 && number % 2 === 0) {
    output = 'Launch Rocks! (CRASH!!!!)';
  }

  if (number % 5 === 0 && number % 2 === 0 && number % 3 === 0) {
    output = 'LaunchCode Rocks!';
  }

  if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0) {
    output = "Rutabagas! That doesn't work.";
  }


  return output;



}

let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["LC101", "LaunchCode Women+", "CodeCamp"],
  launchOutput: launchOutput
}


jasmine.execute();


module.exports = launchcode;

