// https://leetcode.com/problems/median-of-two-sorted-arrays/

var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [...nums1, ...nums2]
    arr.sort((a,b)=>a-b)
    let length = arr.length
    if(length%2){
        return arr[Math.floor(length/2)]
    }else{
        return (arr[length/2]+arr[length/2-1])/2
    }
};