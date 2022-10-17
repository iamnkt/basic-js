const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let s = n.toString();
  let temp = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    temp = s.slice(0, i) + s.slice(i + 1);
    max = +temp > max ? +temp : max;
  }
  return max;
}

module.exports = {
  deleteDigit
};
