const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {
  //Test 1
  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect(function() { new Command(); }).toThrow(new Error('Command type required.'));
  });
  //Test 2
  it("constructor sets command type", function() {
    let command = new Command('command type');
    expect(command.commandType).toEqual('command type');
  });
  //Test 3
  it("constructor sets a value passed in as the 2nd argument", function() {
    let command = new Command('command type', 1200);
    expect(command.value).toEqual(1200);
  });



});