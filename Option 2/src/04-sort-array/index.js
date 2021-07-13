/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is: worst case: 0(n)
// Explain: The complexity grows in a linear fashion with the length of the array.

//LEVEL 1
const check = require('check-types');

module.exports = function sortArray(arr) {
  if(!check.array(arr)) { //check if input is array
    throw new TypeError('Invalid input');
  } else {
    arr.forEach(ele => { //check if each array element is an int
      if(!check.integer(ele)) {
        throw new TypeError('Invalid input');
      }
    })
  }

  if(check.emptyArray(arr)) { //if empty array, return it
    return arr; 
  } 

  //return sorted array
  return arr.sort((a, b) => a - b);
};

//LEVEL 2: without library
module.exports = function sortArray(arr) {
  if(!Array.isArray(arr)) { //check if input is array
    throw new TypeError('Invalid input');
  } else {
    arr.forEach(ele => { //check if each array element is an int
      if(typeof ele !== 'number' || !Number.isInteger(ele)) {
        throw new TypeError('Invalid input');
      }
    })
  }

  //if empty array, return it
  if(arr.length === 0) { 
    return arr; 
  } 

  //return sorted array
  return arr.sort((a, b) => a - b);
};