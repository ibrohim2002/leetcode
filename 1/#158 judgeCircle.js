// https://leetcode.com/problems/robot-return-to-origin/

var judgeCircle = function (moves) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] == "U") x++;
    else if (moves[i] == "D") x--;
    else if (moves[i] == "R") y++;
    else if (moves[i] == "L") y--;
  }
  return x == 0 && y == 0;
};
