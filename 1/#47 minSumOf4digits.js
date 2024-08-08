// https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/

var minimumSum = function(num) {
    let res = num.toString().split('').sort((a,b)=>a-b)
    return +(res[0]+res[3]) + +(res[1]+res[2])
};