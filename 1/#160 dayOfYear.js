// https://leetcode.com/problems/day-of-the-year/

var dayOfYear = function (date) {
  var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let arr = date.split("-");
  let day = Number(arr[2]);
  let month = Number(arr[1]);
  let year = Number(arr[0]);
  for (let i = 0; i < month - 1; i++) {
    day += days[i];
  }
  if (year % 4 == 0 && month > 2 && (year % 100 != 0 || year % 400 == 0)) day++;
  return day;
};
