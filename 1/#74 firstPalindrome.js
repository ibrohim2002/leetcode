// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/

var firstPalindrome = function (words) {
  let pal = "";
  for (let j = 0; j < words.length; j++) {
    let counter = 0;
    for (let i = 0; i < words[j].length; i++) {
      if (words[j][i] === words[j][words[j].length - 1 - i]) {
        counter++;
      }
    }
    if (words[j].length == counter) {
      pal = words[j];
      break;
    }
  }
  return pal;
};
