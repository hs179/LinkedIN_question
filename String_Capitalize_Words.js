// str = "a string word"

// let words = str.split(" ");
// console.log(words);
// words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// console.log(words);




function fn(str){
    words = str.split(" ");
    const newstr = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    return newstr
}

console.log(fn("hello world"));                        // "Hello World"
console.log(fn("javascript is awesome"));              // "JavaScript Is Awesome"
console.log(fn("hello"));                              // "Hello"
console.log(fn("a b c d"));                            // "A B C D"
console.log(fn("HELLO WORLD"));                        // "HELLO WORLD"
console.log(fn("hello  world"));                       // "Hello  World"
console.log(fn("the quick brown fox"));                // "The Quick Brown Fox"
console.log(fn("i love programming"));                 // "I Love Programming"
console.log(fn("a"));                                  // "A"
console.log(fn(""));                                   // ""
console.log(fn("hello from javascript"));              // "Hello From Javascript"

str1 = "hello from js"
words = str1.split(' ');
words[1] = words[1].charAt(0).toUpperCase() + words[1].slice(1)
newwords = words.join(" ")
console.log(newwords);



