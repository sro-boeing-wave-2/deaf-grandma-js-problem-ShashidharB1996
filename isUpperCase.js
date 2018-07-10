/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  let compare = true;
  if (s === s.toUpperCase()) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
};

module.exports = isUppercase;
