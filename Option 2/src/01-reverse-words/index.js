/**
 * You can assume the input:
 *   - is a valid string
 *   - contains words that are divided by a single space
 */

// Average and worst case time complexity (Big-O) of my function is: worst O(n2)
// Explain: The time complexity of this algorithm increases in an exponential fashion with the increase of array elements / length of string

module.exports = function reverseWordsInSentence(input) {
  const arr = input.split(' '); 
  const reversed = arr.map(word => word.split('').reverse().join(''));
  return reversed.join(' ');
};
