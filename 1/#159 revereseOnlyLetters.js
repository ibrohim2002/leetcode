// https://leetcode.com/problems/reverse-only-letters/

var reverseOnlyLetters = function (s) {
  let str = s.replace(/[^a-zA-Z]/g, "");
  if (!str) return s;
  let res = "";
  let char = s.replace(/[a-zA-Z]+/g, "");
  let index = str.length;
  for (let i = 0; i < s.length; i++) {
    if (char.includes(s[i])) {
      res += s[i];
    } else {
      index--;
      res += str[index];
    }
  }
  return res;
};
