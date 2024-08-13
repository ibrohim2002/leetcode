// https://leetcode.com/problems/faulty-keyboard/

var finalString = function (s) {
  let str = "";
  s.split("").forEach((a, i) => {
    if (a == "i") {
      str = str.split("").reverse().join("");
    } else {
      str += a;
    }
  });
  return str;
};
