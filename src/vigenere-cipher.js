const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine { 

  constructor(dir) {
    if (!dir) dir = true;
    this.straight= dir;
    console.log("constructor");
    this.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }


  encrypt(message, key) {
    if (!message || !key) {
       throw new CustomError('I need two args!');
    }
    message = message.toUpperCase();
    console.log(message);    
  }  

  decrypt(message, key) {
    console.log(this.straight);
    if (!message || !key) {
      throw new CustomError('I need two args!');
    }
    // console.log(message);
    return ":";
  }

  
}

module.exports = VigenereCipheringMachine;
