// https://leetcode.com/problems/find-the-key-of-the-numbers/

var generateKey = function (num1, num2, num3) {
  num1 = String(num1).padStart(4, "0");
  num2 = String(num2).padStart(4, "0");
  num3 = String(num3).padStart(4, "0");
  let res = "";
  for (let i = 0; i < 4; i++) {
    res += Math.min(+num1[i], +num2[i], +num3[i]);
  }
  return res;
};
