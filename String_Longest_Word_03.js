function fn(str){
    return str.split(' ').sort((a,b) => b.length - a.length)[0]
}



console.log(fn("The sky turned orange as the sun dipped below the mountain peaks"));  // "mountain"
console.log(fn("The quick brown fox jumped"));                 // "jumped"
console.log(fn("hello world"));                               // "hello"
console.log(fn("a"));                                         // "a"
console.log(fn("javascript"));                                // "javascript"
console.log(fn("I am learning JavaScript programming"));      // "programming"
console.log(fn("the cat sat on mat"));                        // "mat" or "the" (both length 3, first is "the")
console.log(fn("programming is fun and interesting"));        // "interesting"
console.log(fn("short longer longest"));                      // "longest"
console.log(fn("a bb ccc"));                                  // "ccc"