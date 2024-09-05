// https://leetcode.com/problems/valid-palindrome/?envType=problem-list-v2&envId=string&difficulty=EASY

var isPalindrome = function (s) {
  s = s.replace(/[\p{P}$+<= >^`|~]/gu, "").toLowerCase();
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[s.length - 1 - i]) num++;
  }
  if (num == s.length) return true;
  else return false;
};
