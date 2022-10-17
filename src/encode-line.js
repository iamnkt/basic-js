const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
	let arr = str.split('');
	let count = '';
	let result = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i+1]) {
			count++;
		} else {
			if (i === 0 || i === arr.length - 1 && !count) {
				result.push(arr[i]);
			} else {
				count ? result.push(1 + count + arr[i]) : result.push(arr[i]);
			}
			count = '';
		}
	}
	return result.join('');
}

module.exports = {
  encodeLine
};
