// https://leetcode.com/problems/create-target-array-in-the-given-order/

var createTargetArray = function(nums, index) {
    let target = []
    nums.forEach((num,i)=>{
        target.splice(index[i],0,num)
    })
    return target
};