const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let field = matrix.slice(0);
  let count = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === false) {
        field[i][j] = 0;
      }
    }
  }
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === true) {
        if (field[i - 1]) {
          if (field[i - 1][j - 1] !== true && field[i - 1][j - 1] !== undefined) {
            field[i - 1][j - 1] += count;
          }
          if (field[i - 1][j] !== true && field[i - 1][j] !== undefined) {
            field[i - 1][j] += count;
          }
          if (field[i - 1][j + 1] !== true && field[i - 1][j + 1] !== undefined) {
            field[i - 1][j + 1] += count;
          }
        }
        if (field[i + 1]) {
          if (field[i + 1][j - 1] !== true && field[i + 1][j - 1] !== undefined) {
            field[i + 1][j - 1] += count;
          }
          if (field[i + 1][j] !== true && field[i + 1][j] !== undefined) {
            field[i + 1][j] += count;
          }
          if (field[i + 1][j + 1] !== true && field[i + 1][j + 1] !== undefined) {
            field[i + 1][j + 1] += count;
          }
        }
        if (field[i][j - 1] !== true && field[i][j - 1] !== undefined) {
          field[i][j - 1] += count;
        }
        if (field[i][j + 1] !== true && field[i][j + 1] !== undefined) {
          field[i][j + 1] += count;
        }
      }
    }
  }
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === true) {
        field[i][j] = 1;
      }
    }
  }
  return field;
}

module.exports = {
  minesweeper
};
