// https://leetcode.com/problems/self-dividing-numbers/

var selfDividingNumbers = function (left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    let ar = String(i).split("");
    if (ar.includes("0")) continue;
    else if (ar.every((num) => i % num == 0)) arr.push(i);
  }
  return arr;
};
