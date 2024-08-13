// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/

var maxDepth = function(s) {
    let res = 0
    let max = 0
    for(let i=0;i<s.length; i++){
        if(s[i]=='('){
            res++
        }
        else if(s[i]==')'){
            max = Math.max(res, max);
            res--
        } 
    }
    return max
};