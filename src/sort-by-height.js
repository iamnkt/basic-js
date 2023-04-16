const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let ones = [];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      ones.push(i);
    }
  }
  arr.forEach((el) => {
    if (el > 0) {
      result.push(el);
    }
  });
  result.sort((a, b) => a - b);
  ones.forEach((el) => {
    result.splice(el, 0, -1);
  });
  return result;
}

module.exports = {
  sortByHeight
};
