https://leetcode.com/problems/find-the-pivot-integer/submissions/1354279712/?source=submission-ac

var pivotInteger = function(n) {
    let res = Math.sqrt((n*n+n)/2)
    if(res%1) return -1
    else return res
};