const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const deleteDigit = n => {
  let arr = [...('' + n)];
  let val, res, max=-Infinity;

  for (let i=0; i<arr.length; i++) {
    val = [...arr];
    res = val.splice(i,1);
    val = +val.join('');
    if (max < val) max = val;
  }
  return max;
}

module.exports = {
  deleteDigit
};
