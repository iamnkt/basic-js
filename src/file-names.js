const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let suff = 1;
  let arrTemp = [];
  let result = [];
  for (let i = 0; i < names.length; i++) {
    if (!names.includes(names[i], i + 1)) {
      result.push(names[i]);
    } else {
      result.push(names[i]);
      for (let j = i + 1; j < names.length; j++) {
        if (names[j] === names[i]) {
          console.log(names[j])
          names[j] = `${names[j]}(${suff})`;
          console.log(names[j])
          suff++;
        }
      }
      suff = 1;
    }
  }
  return result;
}

module.exports = {
  renameFiles
};
