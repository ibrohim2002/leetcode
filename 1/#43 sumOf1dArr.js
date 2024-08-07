// https://leetcode.com/problems/running-sum-of-1d-array/

var runningSum = function (nums) {
  let index = 0;
  return nums.map((num) => {
    index += num;
    return index;
  });
};
