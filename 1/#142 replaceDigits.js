// https://leetcode.com/problems/replace-all-digits-with-characters/

var replaceDigits = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s[i]))) {
      res += String.fromCharCode(s.charCodeAt(i - 1) + +s[i]);
    } else {
      res += s[i];
    }
  }
  return res;
};
