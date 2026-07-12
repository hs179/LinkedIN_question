// A palindrome is a word, number, phrase, or sentence
// that reads the same forward and backward.

// 👉 Example:
// madam → same when reversed → madam ✅
// 121 → same when reversed → 121 ✅
// hello → reversed → olleh ❌ (not palindrome)

function fn(str){
    revstr = str.toLowerCase().split("").reverse().join('')
    if(str == revstr){
        return true
    }else{
        return false
    }
}

console.log(fn("madam"));
