// https://leetcode.com/problems/rotate-string/?envType=problem-list-v2&envId=string&difficulty=EASY

var rotateString = function(s, goal) {
    if(goal.length!==s.length) return false
    return (s+s).includes(goal)
};