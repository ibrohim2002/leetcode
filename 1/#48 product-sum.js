// https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/

var subtractProductAndSum = function(n) {
    let sum = 0
    let product = 1
    n.toString().split('').forEach((s)=>{
        sum = sum + +s
        product *= s
    })
    return product-sum
};