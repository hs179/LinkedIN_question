function fnLeft(arr, k) {
    const n = arr.length;
    if (n === 0) return arr;

    k = k % n;
    return arr.slice(k).concat(arr.slice(0, k));
}

function fnRight(arr, k) {
    const n = arr.length;
    if (n === 0) return arr;

    k = k % n;
    return arr.slice(-k).concat(arr.slice(0, n - k));
}


console.log(fnLeft([1, 2, 3, 4, 5], 2));                      // [3, 4, 5, 1, 2]
console.log(fnLeft([1, 2, 3, 4, 5], 1));                      // [2, 3, 4, 5, 1]
console.log(fnLeft([1, 2, 3, 4, 5], 3));                      // [4, 5, 1, 2, 3]
console.log(fnLeft([1, 2, 3, 4, 5], 0));                      // [1, 2, 3, 4, 5]
console.log(fnLeft([1, 2, 3, 4, 5], 5));                      // [1, 2, 3, 4, 5]
console.log(fnLeft([1, 2, 3, 4, 5], 7));                      // [3, 4, 5, 1, 2]
console.log("///////")
console.log(fnRight([1, 2, 3, 4, 5], 2));                     // [4, 5, 1, 2, 3]
console.log(fnRight([1, 2, 3, 4, 5], 1));                     // [5, 1, 2, 3, 4]
console.log(fnRight([1, 2, 3, 4, 5], 3));                     // [3, 4, 5, 1, 2]
console.log(fnRight([1, 2, 3, 4, 5], 0));                     // [1, 2, 3, 4, 5]