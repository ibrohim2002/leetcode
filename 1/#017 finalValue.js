// https://leetcode.com/problems/final-value-of-variable-after-performing-operations/

var finalValueAfterOperations = function (operations) {
  let x = 0;
  operations.forEach((a) => (a == "X++" || a == "++X" ? x++ : x--));
  return x;
};
