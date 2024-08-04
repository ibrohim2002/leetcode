// https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript

var createCounter = function(init) {
    let res = init
    return {
        increment: ()=>{
            return ++init
        },
        decrement: ()=>{
            return --init
        },
        reset: ()=>{
            init = res
            return init
        },
    }
};