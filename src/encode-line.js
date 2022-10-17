const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = str => {

  let len = str.length;
  if (len < 2) {
    return str;
  }

  let res = '';

  for (let i = 0; i < len; i++) {
    let count = 1;

    for (let j = i; j < len; j++) {
      if (str[j] === str[j + 1]) {
        count++;
      } else {
        i = j;
        break;
      }
    }

    if (count > 1) {
        res += count + str[i - 1];
    } else {
        let idx = i - 1 < 0 ? 0 : i - 1;
        res += str[i];
      }
  }

  return res;
}

module.exports = {
  encodeLine
};
