// https://leetcode.com/problems/build-array-from-permutation/

var buildArray = function(nums) {
    let res = nums.map((num,index)=>{
        return nums[nums[index]]
    })
    return res
};