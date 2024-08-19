// https://leetcode.com/problems/sum-of-squares-of-special-elements/

var sumOfSquares = function (nums) {
  let sum = 0;
  let l = nums.length;
  nums.forEach((num, i) => {
    if (l % (i + 1) == 0) {
      sum += num * num;
    }
  });
  return sum;
};
