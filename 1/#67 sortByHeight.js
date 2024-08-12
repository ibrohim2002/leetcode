// https://leetcode.com/problems/sort-the-people/submissions/1352628292/

var sortPeople = function(names, heights) {
    let arr = heights.map((height,i)=>{
        return [height,i]
    })
    arr.sort((a,b)=>b[0]-a[0])
    return names.map((name,i)=>names[arr[i][1]])
};