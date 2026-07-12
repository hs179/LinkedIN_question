str = "string"

function reverseString(str){
    revstr=""
    for(let i = str.length-1 ;  i >= 0; i--){
        revstr += str[i]
    }
    return revstr;
}
console.log(reverseString(str));