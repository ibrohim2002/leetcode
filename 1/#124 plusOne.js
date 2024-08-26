// https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  let num = digits.join("");
  num = BigInt(num) + BigInt(1);
  return num.toString().split("").map(Number);
};
