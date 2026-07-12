let str = "maam";

function palindrome(str) {
    // Split -> Reverse -> Join
    let word = str.split('').reverse().join('');

    if (str === word) {
        console.log("Palindrome");
    } else {
        console.log("Non-palindrome");
    }
}

palindrome(str);
