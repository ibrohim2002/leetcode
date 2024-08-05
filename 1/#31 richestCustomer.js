// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function(accounts) {
    let res = accounts.map(account=>{
        return account.reduce((sum,cur)=> sum+cur, 0 )
        })
    return Math.max(...res)
};