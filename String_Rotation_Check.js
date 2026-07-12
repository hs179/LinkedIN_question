function fn(str1, str2){
    if(str1.length !== str2.length) return false
    return (str1+str1).includes(str2);
}


console.log(fn("hello", "llohe"));                             // true
console.log(fn("hello", "ehllo"));                             // true
console.log(fn("hello", "hello"));                             // true
console.log(fn("hello", "world"));                             // false
console.log(fn("waterbottle", "erbottlewat"));                 // true
console.log(fn("abcd", "cdab"));                               // true
console.log(fn("abcd", "acbd"));                               // false
console.log(fn("a", "a"));                                     // true
console.log(fn("abc", "def"));                                 // false
console.log(fn("programming", "mingprogra"));                  // true
console.log(fn("hello", "helloworld"));                        // false