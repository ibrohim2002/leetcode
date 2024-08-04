// https://leetcode.com/problems/shuffle-the-array/

var shuffle = function(nums, n) {
    let firstHalf = nums.slice(0,n)
    let secondHalf = nums.slice(n,nums.length)
    let res = []
    firstHalf.forEach((num,i)=>{
        res.push(num,secondHalf[i])
    })
    return res
};