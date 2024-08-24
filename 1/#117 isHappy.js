// https://leetcode.com/problems/happy-number/

var isHappy = function (n) {
  for (let i = 0; i < 7; i++) {
    let sum = 0;
    n.toString()
      .split("")
      .forEach((s) => (sum += s * s));
    n = Number(sum);
  }
  return n == 1;
};
