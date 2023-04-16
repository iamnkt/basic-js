const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const result = [];
    let arrMsg = message.toUpperCase().split('');
    let keyArr = key.toUpperCase().split('');
    let j = 0;
    for (let i = 0; i < arrMsg.length; i++) {
      if (arrMsg[i].charCodeAt(0) > 64 && arrMsg[i].charCodeAt(0) < 91) {
        if (j === keyArr.length) {
          j = 0;
        }
        let codeEnc = (arrMsg[i].charCodeAt(0) + keyArr[j].charCodeAt(0)) % 26;
        let charEnc = String.fromCharCode(codeEnc + 65);
        result.push(charEnc);
        j++;
      } else {
        result.push(arrMsg[i]);
      }
    }
    return this.mode ? result.join('') : result.reverse().join('');
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const result = [];
    let arrMsg = encryptedMessage.split('');
    let keyArr = key.toUpperCase().split('');
    let j = 0;
    for (let i = 0; i < arrMsg.length; i++) {
      if (arrMsg[i].charCodeAt(0) > 64 && arrMsg[i].charCodeAt(0) < 91) {
        if (j === keyArr.length) {
          j = 0;
        }
        let codeEnc = (arrMsg[i].charCodeAt(0) - keyArr[j].charCodeAt(0)) % 26;
        if (codeEnc < 0) {
          codeEnc = codeEnc + 26;
        }
        let charEnc = String.fromCharCode(codeEnc + 65);
        result.push(charEnc);
        j++;
      } else {
        result.push(arrMsg[i]);
      }
    }
    return this.mode ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};