// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/submissions/1383448054/

var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= queryTime && endTime[i] >= queryTime) count++;
  }
  return count;
};
