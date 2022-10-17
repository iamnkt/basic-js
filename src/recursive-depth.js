const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    let recurs_Depth = 0;
    let counter = 1;
    arr.forEach((bracket) => {
      if (Array.isArray(bracket)) {
        counter = new DepthCalculator().calculateDepth(bracket);
        if (recurs_Depth < counter) recurs_Depth = counter;
      }
    })
    return recurs_Depth + 1
  }
}

module.exports = {
  DepthCalculator
};
