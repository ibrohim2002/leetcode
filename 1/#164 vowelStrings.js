var vowelStrings = function(words, left, right) {
    let vowels = ['a','e','i','u','o']
    let res = 0
    for(let i=left; i<=right; i++){
        if(vowels.includes(words[i][0]) &&
        vowels.includes(words[i][words[i].length-1])){
            res++
        }
    }
    return res
};