// https://leetcode.com/problems/count-symmetric-integers/

var countSymmetricIntegers = function (low, high) {
  let res = 0;
  for (let i = low; i <= high; i++) {
    let arr = String(i);
    if (arr.length % 2) continue;
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j < arr.length / 2) sum1 += +arr[j];
      else sum2 += +arr[j];
    }
    if (sum1 == sum2) res++;
  }
  return res;
};
