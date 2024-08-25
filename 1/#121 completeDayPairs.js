// https://leetcode.com/problems/count-pairs-that-form-a-complete-day-i/

var countCompleteDayPairs = function (hours) {
  let res = 0;
  for (let i = 0; i < hours.length; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 == 0) res++;
    }
  }
  return res;
};
