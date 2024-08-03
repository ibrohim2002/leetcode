//  https://leetcode.com/problems/permutation-difference-between-two-strings/

var findPermutationDifference = function(s, t) {
    let res = 0
    for(let i=0; i<s.length; i++){
        res += Math.abs(i-t.indexOf(s[i]))
    }
    return res
};