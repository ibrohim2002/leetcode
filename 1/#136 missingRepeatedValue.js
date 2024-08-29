// https://leetcode.com/problems/find-missing-and-repeated-values/

var findMissingAndRepeatedValues = function (grid) {
  grid = grid.flat();
  let set = new Set();
  let res = [];
  grid.forEach((n) => {
    if (set.has(n)) res[0] = n;
    set.add(n);
  });
  grid.forEach((n, i) => {
    if (!set.has(i + 1)) res[1] = i + 1;
  });
  return res;
};
