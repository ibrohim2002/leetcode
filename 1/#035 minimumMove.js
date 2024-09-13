// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let res = 0;
  seats.forEach((a, i) => {
    res += Math.abs(students[i] - a);
  });
  return res;
};
