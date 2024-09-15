// https://leetcode.com/problems/goal-parser-interpretation/submissions/1346478707/

var interpret = function (command) {
  return command.split("(al)").join("al").split("()").join("o");
};
