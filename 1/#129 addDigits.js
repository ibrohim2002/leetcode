// https://leetcode.com/problems/add-digits/

var addDigits = function (num) {
  let sum = 0;
  num
    .toString()
    .split("")
    .forEach((n) => (sum = sum + +n));
  num = sum;
  while (num > 9) {
    sum = 0;
    num
      .toString()
      .split("")
      .forEach((n) => (sum = sum + +n));
    num = sum;
  }
  return num;
};
