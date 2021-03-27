module.exports = function repeater(str, options) {
  
  str = String.toString(str);

  addition = String.toString(options.addition);

  repeatTimes = (typeof options.repeatTimes === "number") ? options.repeatTimes : 0;
  additionRepeatTimes = (typeof options.additionRepeatTimes === "number") ? options.additionRepeatTimes : 0;

  separator = (options.separator) ? options.separator : "+";
  additionSeparator = (options.additionSeparator) ? options.additionSeparator : "|";
  
};
  