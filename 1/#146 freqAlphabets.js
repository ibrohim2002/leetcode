// https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

var freqAlphabets = function (s) {
  let res = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] == "#") {
      res.unshift(String.fromCharCode(Number(s.slice(i - 2, i)) + 96));
      i -= 2;
    } else {
      res.unshift(String.fromCharCode(Number(s[i]) + 96));
    }
  }
  return res.join("");
};
