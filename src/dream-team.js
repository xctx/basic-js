
module.exports = function createDreamTeam(members) {
  
  if (members instanceof Error) return false;
  
  for (let i=0; i<members.length; i++){
    if (members[i] instanceof Error) return false;
  } 

  };
