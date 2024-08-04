// https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript

var map = function(arr, fn) {
    let res = []
    arr.forEach((n,i)=>res.push(fn(n,i)))
    return res
};