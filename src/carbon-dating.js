const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
 // Your task is to implement the function dateSample(sampleActivity) that calculates sample 
 // approximate age (in years). 
 // Please use given MODERN_ACTIVITY and HALF_LIFE_PERIOD.
 // Function parameter sampleActivity is a string. Calculated sample age must be number.
 // Age must be integer. Age must be rounded up (ceiling). In case of wrong input parameter type 
 // or inadequate activity value or absence of argument function must return false.
 // For example:
 // dateSample('1') => 22387 (or 22392 depending on formula used)
 // dateSample('WOOT!') => false
 // Write your code in src/carbon-dating.js.
 // In any sample of a given radioactive substance, the number of atoms of the radioactive isotope must decrease with time as their nuclei decay to nuclei of a more stable isotope. Using N to represent the number of atoms of the radioactive isotope, we can define the rate of decay of the sample, which is also called its activity (A) as the decrease in the number of the radioisotope’s nuclei per unit time:
// A=−ΔNΔt(4)

// Activity is usually measured in disintegrations per second (dps) or disintegrations per minute (dpm).

// The activity of a sample is directly proportional to the number of atoms of the radioactive isotope in the sample:

// A=kN

};
