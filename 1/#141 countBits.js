// https://leetcode.com/problems/counting-bits/submissions/1373124636/

var countBits = function (n) {
  let res = [0];
  for (let i = 1; i <= n; i++) {
    res[i] = res[i >> 1] + (i & 1);
  }
  return res;
};
