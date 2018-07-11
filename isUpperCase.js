/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  let compare = false;
  if (s === s.toUpperCase()) {
    compare = true;
  }
  return compare;
};

module.exports = isUppercase;
