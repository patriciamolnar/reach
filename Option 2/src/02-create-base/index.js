// You can assume the input is an integer

// Average and worst case time complexity (Big-O) of my function is: worst case: O(1)
// Explain: As the input is always one number, the time complexity will remain the same. 

module.exports = function createBase(integer) {
    if(integer > 0) {
      return function(num) {
        return num + integer;
      }
    }

    if(integer < 0) {
      return function(num) {
        return integer + num;
      }
    }
};
