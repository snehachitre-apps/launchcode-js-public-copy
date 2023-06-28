class Message {
  constructor(name, commands) {
    this.name = name;
    if(!name){
      throw Error('name required.');
    }
    // if (typeof commands != Array){
    //        throw Error('commands needs to be an array [of commands].');
    //   }
    this.commands=commands;
  }
  
}

module.exports = Message;