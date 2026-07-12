function longestWord(str){
    return str.split(" ").sort((a,b)=> b.length - a.length)[0]
}


console.log(longestWord('The quick brown fox jumped')); // "jumped"