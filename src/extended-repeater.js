const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];
  let addResult = [];
  if (!typeof str === 'string') {
    str.toString();
  }
  if (typeof options.separator === 'undefined') {
    options.separator = '+';
  }
  if (!typeof options.addition === 'undefined' && !typeof options.addition === 'string' || options.addition === null) {
    options.addition+='';
  }
  if (typeof options.additionSeparator === 'undefined') {
    options.additionSeparator = '|';
  }
  if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    addResult.push(options.addition);
  }
  addResult = addResult.join(options.additionSeparator);
  for (let i = 0; i < options.repeatTimes; i++) {
    result.push(str+addResult);
  }
  result = result.join(options.separator);
  return result;
}

module.exports = {
  repeater
};
