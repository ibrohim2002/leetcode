// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  let str = x.toString();
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[str.length - 1 - i]) num++;
  }
  if (num == str.length) return true;
  else return false;
};
