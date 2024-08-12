// https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/

var countKDifference = function (nums, k) {
  let counter = 0;
  nums.forEach((num, i) => {
    for (let j = i + 1; j < nums.length; j++) {
      Math.abs(num - nums[j]) == k && counter++;
    }
  });
  return counter;
};
