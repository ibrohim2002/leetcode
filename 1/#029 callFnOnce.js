// https://leetcode.com/problems/allow-one-function-call/

var once = function (fn) {
  let isCalled = 0;
  return function (...args) {
    if (isCalled) {
      return undefined;
    } else {
      isCalled = 1;
      return fn(...args);
    }
  };
};
