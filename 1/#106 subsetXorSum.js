// https://leetcode.com/problems/sum-of-all-subset-xor-totals/

var subsetXORSum = function (nums) {
  sum = 0;
  for (n of nums) {
    sum |= n;
  }
  return sum << (nums.length - 1);
};
