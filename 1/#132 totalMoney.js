// https://leetcode.com/problems/calculate-money-in-leetcode-bank/

var totalMoney = function (n) {
  let total = 0;
  let day = 1;
  let mon = 1;
  for (let i = 1; i <= n; i++) {
    total += day;
    day++;
    if (i % 7 == 0) {
      mon++;
      day = mon;
    }
  }
  return total;
};
