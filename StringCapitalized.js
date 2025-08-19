// str = "a string word"

// let words = str.split(" ");
// console.log(words);
// words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// console.log(words);



str = "himanshu singh"
let words = str.split(" ");

words = words.map(word => {
  let reversed = word.split("").reverse().join("");
  return reversed.charAt(0).toUpperCase() + reversed.slice(1).toLowerCase();
}).join(" ");

console.log(words);

