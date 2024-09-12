// https://leetcode.com/problems/counter-ii/

var createCounter = function (init) {
  let res = init;
  return {
    increment: () => ++init,
    decrement: () => --init,
    reset: () => (init = res),
  };
};
