class Rover {
  constructor(position) {
    this.position = position;
    if (!position) {
      throw Error('position required.');
    }
    this.mode = 'NORMAL';
    this.generatorWatts = 110;
  }

  setResultsArray(message) {
    let commands = message.commands;
    // console.log(commands);
    let results = [];

    // loop for each command to know command type and value. Set appropriate properties. 
    for (let i = 0; i < commands.length; i++) {
      //assign  a  temp result object
      let current_resultobject = {};
      //setting values as per requirements
      if (commands[i].commandType === 'MOVE') {
        //if rover is in low power, rover should ignore move command and set completed = false
        if (this.mode === 'LOW_POWER') {
          current_resultobject['completed'] = false;
        }
        else {
          //if rover mode is normal proceed with moving 
          //UPDATES THE  MOVE POSITION BY ADDING
          // this.position += commands[i].value;
          //UPDATES THE MOVE POSOTION BY REPLACING
          this.position = commands[i].value;
          current_resultobject['completed'] = true;
        }
      }
      else if (commands[i].commandType === 'STATUS_CHECK') {
        //status check returns current status of rover

        current_resultobject['completed'] = true;
        //set roverStatus as current mode ,generatorWatts, position values
        let roverStatus = { mode: this.mode, generatorWatts: this.generatorWatts, position: this.position };

        current_resultobject['roverStatus'] = roverStatus;
      }
      else if (commands[i].commandType === 'MODE_CHANGE') {
        //rover changes mode as per command priority in array
        this.mode = commands[i].value;
        current_resultobject['completed'] = true;

      }
      //setting the results array in results object
      results.push(current_resultobject);
    }

    return results;
  }

  receiveMessage(message) {
    //setting message name
    let msg = message.name;
    //set results value array by calling functon setResultsArray and get response array
    let results = this.setResultsArray(message);
    //constructinf response
    let response = {
      message: msg,
      results: results
    };

    return response;
  }

}

module.exports = Rover;