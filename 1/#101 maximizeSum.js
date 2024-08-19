// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/submissions/1361003313/

var maximizeSum = function (nums, k) {
  let sum = 0;
  let max = Math.max(...nums);
  for (let i = 0; i < k; i++) {
    sum = sum + max + i;
  }
  return sum;
};
