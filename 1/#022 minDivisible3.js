// https://leetcode.com/problems/find-minimum-operations-to-make-all-elements-divisible-by-three/

var minimumOperations = function (nums) {
  let res = 0;
  nums.forEach((num) => {
    if (num % 3) res++;
  });
  return res;
};
