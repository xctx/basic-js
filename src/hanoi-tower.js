const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let moves = (2 ** disksNumber) - 1;
  let sec = Math.floor(moves * (60 * 60 / turnsSpeed));
  return {turns : moves, seconds : sec};
};
