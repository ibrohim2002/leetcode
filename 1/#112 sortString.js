// https://leetcode.com/problems/increasing-decreasing-string/submissions/1365621220/

var sortString = function (s) {
  let arr = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - 97]++;
  }
  let res = "";
  let shouldContinue = true;
  while (shouldContinue) {
    shouldContinue = false;
    for (let i = 0; i < 26; i++) {
      if (arr[i] > 0) {
        res += String.fromCharCode(i + 97);
        arr[i]--;
        shouldContinue = true;
      }
    }
    for (let i = 26; i >= 0; i--) {
      if (arr[i] > 0) {
        res += String.fromCharCode(i + 97);
        arr[i]--;
        shouldContinue = true;
      }
    }
  }
  return res;
};
