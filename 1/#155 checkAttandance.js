// https://leetcode.com/problems/student-attendance-record-i/?envType=problem-list-v2&envId=string&difficulty=EASY

var checkRecord = function (s) {
  if (s.includes("LLL")) return false;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "A") {
      counter++;
      if (counter == 2) return false;
    }
  }
  return true;
};
