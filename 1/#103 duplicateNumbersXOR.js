// https://leetcode.com/problems/find-the-xor-of-numbers-which-appear-twice/

var duplicateNumbersXOR = function (nums) {
  return nums
    .filter((num, i) => {
      return nums.indexOf(num) !== i;
    })
    .reduce((a, b) => (a ^= b), 0);
};
