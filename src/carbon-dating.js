const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
const dateSample = (sampleActivity) => {
  const activity = Number(sampleActivity);

  if (Number.isNaN(activity) || !(typeof sampleActivity === "string"))
    return false;

  const result = Math.ceil(Math.log(MODERN_ACTIVITY / activity) / K);

  if (result <= 0 || isNaN(result) || !isFinite(result))
    return false;

  return result;
};

module.exports = {
  dateSample
};
