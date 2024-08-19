// https://leetcode.com/problems/lexicographically-smallest-palindrome/

var makeSmallestPalindrome = function (s) {
  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[s.length - 1 - i]) {
      word += s[i];
    } else {
      s[i].charCodeAt() > s[s.length - 1 - i].charCodeAt()
        ? (word += s[s.length - 1 - i])
        : (word += s[i]);
    }
  }
  return word;
};
