// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/

var greatestLetter = function (s) {
  for (let i = 90; i >= 65; i--) {
    if (
      s.includes(String.fromCharCode(i)) &&
      s.includes(String.fromCharCode(i + 32))
    ) {
      return String.fromCharCode(i);
    }
  }
  return "";
};
