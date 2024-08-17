// https://leetcode.com/problems/harshad-number/

var sumOfTheDigitsOfHarshadNumber = function (x) {
  let sum = x
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
  return x % sum ? -1 : sum;
};
