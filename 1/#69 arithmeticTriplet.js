// https://leetcode.com/problems/number-of-arithmetic-triplets/

var arithmeticTriplets = function (nums, diff) {
  let counter = 0;
  nums.forEach((num) => {
    if (nums.includes(num + diff) && nums.includes(num + 2 * diff)) {
      counter++;
    }
  });
  return counter;
};
