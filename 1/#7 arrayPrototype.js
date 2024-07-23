// https://leetcode.com/problems/array-prototype-last/

Array.prototype.last = function () {
  if (this.length) {
    return this[this.length - 1];
  } else {
    return -1;
  }
};
