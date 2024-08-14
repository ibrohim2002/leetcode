// https://leetcode.com/problems/remove-outermost-parentheses/

var removeOuterParentheses = function (s) {
  let counter = 0;
  return s
    .split("")
    .filter((a) => {
      if (a == "(") {
        counter++;
        if (counter == 1) {
          return false;
        } else {
          return true;
        }
      } else if (a == ")") {
        counter--;
        if (counter == 0) {
          return false;
        } else {
          return true;
        }
      }
    })
    .join("");
};
