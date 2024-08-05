// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone/

var minMovesToSeat = function(seats, students) {
    let seatsSorted = seats.sort((a,b)=>a-b)
    let studentsSorted = students.sort((a,b)=>a-b)
    let res = seatsSorted.map((a,i)=>{
        return Math.abs(studentsSorted[i]-a)
    })
    return res.reduce((sum,cur)=>sum+cur,0)
};