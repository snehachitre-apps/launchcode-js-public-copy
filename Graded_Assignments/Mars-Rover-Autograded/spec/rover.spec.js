const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
  // Test  extra
  it("throws error if a position is NOT passed into the constructor as the first parameter", function() {
    expect(function() { new Rover(); }).toThrow(new Error('position required.'));
  });

  //Test 7
  it("constructor sets position and default values for mode and generatorWatts", function() {
    let rover = new Rover(98382);
    expect(rover.position).toEqual(98382);
    expect(rover.mode).toEqual('NORMAL');
    expect(rover.generatorWatts).toEqual(110);
  });

  //Test 8
  it("response returned by receiveMessage contains name of message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);

    expect(response.message).toEqual(message.name);

  });

  //Test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let message = new Message('Test message with two commands', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);

    expect(response.results.length).toEqual(2);

  });

  //Test 10
  it("responds correctly to status check command", function() {
    let commands = [new Command('STATUS_CHECK')];
    let message = new Message('Test message with status check command', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message).results;

    expect(Object.keys(response[0])).toContain('roverStatus');
    expect(Object.keys(response[0].roverStatus)).toContain('mode');
    expect(Object.keys(response[0].roverStatus)).toContain('generatorWatts');
    expect(Object.keys(response[0].roverStatus)).toContain('position');
    //NOT SURE HOW TO CHECK ACCURACY
    // console.log(rover);
    // console.log(response);
    expect(response[0].roverStatus.position).toEqual(98382);
    expect(response[0].roverStatus.mode).toEqual('NORMAL');
    expect(response[0].roverStatus.generatorWatts).toEqual(110);
  });


  //Test 11
  it("responds correctly to mode change command", function() {
    //TESTING LOW POWERR
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message = new Message('Test for  MODE_CHANGE  command', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message).results;

    expect(Object.keys(response[0])).toContain('completed');
    expect(response[0].completed).toBeTrue();
    expect(rover.mode).toEqual('LOW_POWER');
    // console.log(rover);
    // console.log(response);

    //TESTING NORMAL
    commands = [new Command('MODE_CHANGE', 'NORMAL')];
    message = new Message('Test  for MODE_CHANHGE  command', commands);
    rover = new Rover(98382);    // Passes 98382 as the rover's position.
    response = rover.receiveMessage(message).results;
    expect(Object.keys(response[0])).toContain('completed');
    expect(response[0].completed).toBeTrue();
    expect(rover.mode).toEqual('NORMAL');
    //console.log(rover);
   // console.log(response);


  });

  //Test 12
  it("responds with false completed value when attempting to move in LOW_POWER mode", function() {
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('MOVE', 1000)];
    let message = new Message('Test  for move command afer rover is in low power', commands);
    let rover = new Rover(98382);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message).results;

    expect(Object.keys(response[1])).toContain('completed');
    expect(response[1].completed).toBeFalse();
    // console.log(rover);
    // console.log(response);
  });


  //Test 13
  
  it("responds with position for move command", function() {
    let commands = [new Command('MOVE', 1000)];
    let message = new Message('Test for move command whether rover moves position', commands);
    let rover = new Rover(90000);    // Passes 98382 as the rover's position.
    let response = rover.receiveMessage(message);
    //IF WE WANT TO ADD THE VALUE OF NEW POSITION TO EXISTING
    // expect(rover.position).toEqual(91000);
     //IF WE WANT TO UPDATE VALUE TO NEW POSITION
    expect(rover.position).toEqual(1000);




  });
});
