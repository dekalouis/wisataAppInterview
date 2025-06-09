/**
 * @param {number[]} input
 * @returns {number[]}
 */
function lenOfLongestConsecutiveSequence(input) {
  // Implement this function
  const set = new Set(input);

  let max = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let length = 1;
      while (set.has(current + 1)) {
        current++;
        length++;
      }

      if (length > max) {
        max = length;
      }
    }
  }
  return max;
}

// let sample = [3, 4, 5, 10, 11, 12, 13, 20];

console.log(lenOfLongestConsecutiveSequence(sample));

module.exports = lenOfLongestConsecutiveSequence;
