var percentageLetter = function(s, letter) {
    let count = 0
    for(let i=0; i<s.length; i++){
        if(s[i]==letter) count++
    }
    let res = Math.floor(count/s.length*100)
    return res
};