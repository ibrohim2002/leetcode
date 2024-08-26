// https://leetcode.com/problems/xor-operation-in-an-array/

var xorOperation = function (n, start) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum ^= start + 2 * i;
  }
  return sum;
};
