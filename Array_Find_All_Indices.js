function fn(arr, target) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            result.push(i);
        }
    }
    return result;
}


console.log(fn([1, 2, 3, 2, 4, 2, 5], 2));                    // [1, 3, 5]
console.log(fn([1, 2, 3, 4, 5], 3));                          // [2]
console.log(fn([1, 2, 3, 4, 5], 6));                          // []
console.log(fn([1, 1, 1, 1], 1));                             // [0, 1, 2, 3]
console.log(fn([5], 5));                                      // [0]
console.log(fn([], 5));                                       // []
console.log(fn('hello', 'l'));                                // [2, 3]
console.log(fn('javascript', 'a'));                           // [1, 5]
console.log(fn([10, 20, 10, 30, 10], 10));                    // [0, 2, 4]
console.log(fn(['a', 'b', 'a', 'c', 'a'], 'a'));              // [0, 2, 4]