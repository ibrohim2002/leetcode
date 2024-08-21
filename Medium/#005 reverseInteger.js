// https://leetcode.com/problems/reverse-integer/

var reverse = function (x) {
  let res = 0;
  while (x >= 1 || x <= -1) {
    res *= 10;
    res = res + (x % 10);
    if (x > 0) x = Math.floor(x / 10);
    else x = Math.ceil(x / 10);
  }
  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) return 0;
  else return res;
};
