// https://leetcode.com/problems/count-the-digits-that-divide-a-number/submissions/1351782650/

var countDigits = function (num) {
  let counter = 0;
  for (let i = 0; i < num.toString().length; i++) {
    num % num.toString()[i] == 0 && counter++;
  }
  return counter;
};
