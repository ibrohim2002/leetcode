// https://leetcode.com/problems/find-target-indices-after-sorting-array/submissions/1365640071/

var targetIndices = function (nums, target) {
  nums.sort((a, b) => a - b);
  let arr = [];
  nums.forEach((num, i) => num == target && arr.push(i));
  return arr;
};
