const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = members => {
  if (!Array.isArray(members)) return false;
  let res = members.filter(el => (typeof el === 'string' && el.length > 0)).map(el => el.trimStart()[0].toUpperCase()).sort().join('');
  return res;
}

module.exports = {
  createDreamTeam
};
