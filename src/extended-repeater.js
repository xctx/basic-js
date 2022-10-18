const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const repeater = (str, options) => {

  let res = '';
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
  } = options;
  [str, separator, addition, additionSeparator] =
  [str, separator, addition, additionSeparator].map(String);

  for (let i = 0; i < additionRepeatTimes; i++) {
    str += addition;
    str += (i < additionRepeatTimes - 1) ? additionSeparator : '';
  }

  for (let i = 0; i < repeatTimes; i++) {
    res += str;
    res += (i < repeatTimes - 1) ? separator : '';
  }

  return res;
};

module.exports = {
  repeater
};
