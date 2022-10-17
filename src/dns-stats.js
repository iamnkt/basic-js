const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
	const map = new Map();
	for (let i = 0; i < domains.length; i++) {
	  for (let j = domains[i].length -1; j >= 0; j--) {
      if (domains[i][j] === '.') {
        let domainPart = `.${domains[i].substring(j + 1).split('.').reverse().join('.')}`
        map.has(domainPart) ? map.set(domainPart, map.get(domainPart) + 1) : map.set(domainPart, 1);
      }
      if (j === 0) {
        let fullPart = `.${domains[i].substring(0).split('.').reverse().join('.')}`
        map.has(fullPart) ? map.set(fullPart, map.get(fullPart) + 1) : map.set(fullPart, 1);
      } 
	  }	
	}
	return Object.fromEntries(map);
}


module.exports = {
  getDNSStats
};
