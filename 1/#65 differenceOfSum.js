// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/

var differenceOfSum = function (nums) {
  let elSum = nums.reduce((sum, curr) => {
    return sum + curr;
  }, 0);
  let digitSum = nums
    .join("")
    .toString()
    .split("")
    .reduce((sum, curr) => {
      return sum + +curr;
    }, 0);
  return elSum - digitSum;
};
