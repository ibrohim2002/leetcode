// https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function () {
  if (!this.length) return -1;
  return this[this.length - 1];
};
