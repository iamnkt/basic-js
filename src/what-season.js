const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date instanceof Date) {
    if (date.hasOwnProperty('toString')) {
      throw new Error('Invalid date!');
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if (month >= 1 && month < 3 || month === 12) {
      return 'winter';
    } 
    if (month >= 3 && month < 6) {
      return 'spring';
    } 
    if (month >= 6 && month < 9) {
      return 'summer';
    }
    if (month >= 9 && month < 12) {
      return 'fall';
    }
  }
  throw new Error('Invalid date!');
}

module.exports = {
  getSeason
};
