module.exports = function repeater(str, options) {

  let addition = ((typeof options.addition === 'string') && 
                  (options.addition !== null ))? options.addition: ("" + options.addition);

  if (typeof options.addition === 'undefined') addition = ''; 
 
  let repeatTimes = (typeof options.repeatTimes !== "number") ? 0 : options.repeatTimes;
  let additionRepeatTimes = (typeof options.additionRepeatTimes !== "number") ? 0 : options.additionRepeatTimes;

  repeatTimes = (typeof options.repeatTimes === 'undefined')? 1 : options.repeatTimes;
  additionRepeatTimes = (typeof options.additionRepeatTimes === 'undefined') ? 1 : options.additionRepeatTimes;

  let separator = (options.separator) ? options.separator : "+";
  let additionSeparator = (options.additionSeparator) ? options.additionSeparator : "|";
  let res='', add='';

  for (let j=0; j<additionRepeatTimes; j++){
    add = add + addition + (j === additionRepeatTimes-1?'':additionSeparator);
  }

  for (let i=0; i<repeatTimes; i++){
    res = res + str + add + (i === repeatTimes-1?'':separator);
  } 

  return res;
};
  