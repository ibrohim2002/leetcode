// https://leetcode.com/problems/maximum-69-number/

var maximum69Number = function (num) {
  let str = num.toString().split("");
  str.splice(str.indexOf("6"), 1, "9");
  return str.join("");
};
