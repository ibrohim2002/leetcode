// https://leetcode.com/problems/filter-elements-from-array/

var filter = function(arr, fn) {
    let res = []
    arr.forEach((n,i)=>{
        if(fn(n,i)){
            res.push(n)
        }
    })
    return res
};