// https://leetcode.com/problems/left-and-right-sum-differences/

var leftRightDifference = function (nums) {
  let leftSum = [];
  let rightSum = [];
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    leftSum.push(index);
    index += nums[i];
  }
  index = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    rightSum.unshift(index);
    index += nums[i];
  }
  return leftSum.map((num, i) => {
    return Math.abs(num - rightSum[i]);
  });
};
