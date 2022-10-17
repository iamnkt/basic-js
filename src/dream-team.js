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
function createDreamTeam(members) {
  let membersNames = [];
  let firstLetters = [];
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach(member => {
    if (typeof member === 'string') {
      membersNames.push(member.trim().toUpperCase());
    }
  });
  membersNames.sort();
  membersNames.forEach(member => {
    firstLetters.push(member.slice(0, 1));
  })
  return firstLetters.join('');
}

module.exports = {
  createDreamTeam
};
