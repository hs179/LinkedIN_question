function fn(str, target){
    count = 0;
    for(let char of str){
        if(char === target){
            count++
        }
    }
    return {[target]:count}
}

console.log(fn("hello world", "l"));                  // { l: 3 }
console.log(fn("javascript", "a"));                   // { a: 2 }
console.log(fn("banana", "a"));                       // { a: 3 }
console.log(fn("programming", "m"));                  // { m: 2 }
console.log(fn("hello world", "z"));                  // { z: 0 }
console.log(fn("Mississippi", "s"));                  // { s: 2 }
console.log(fn("Mississippi", "S"));                  // { S: 2 }
console.log(fn("12321", "2"));                        // { '2': 2 }
console.log(fn("hello world", " "));                  // { ' ': 1 }
console.log(fn("aaaaaa", "a"));                       // { a: 6 }
console.log(fn("a", "a"));                            // { a: 1 }