
module.exports = function createDreamTeam(members) {

  if ((members instanceof Error) || !(Array.isArray(members))) {
    return false;
  }
  
  for (let i=0; i<members.length; i++){
    if (members[i] instanceof Error) return false;
  } 

  const isString= (el) => {
    return (typeof el  === 'string');
  }

  members = members.filter(isString);
  members = members.map((el) => { 
    return el.trim().toUpperCase().split('')[0];
  });


  return members.sort().join('');

};
