function fn(num) {
    while (num > 9) {
        let result = num
            .toString()
            .split('')
            .reduce((sum, curr) => sum + Number(curr), 0);

        num = result; 
    }

    return num;
}

console.log(fn(38));                                  // 2
console.log(fn(9875));                               // 2
console.log(fn(5));                                  // 5
console.log(fn(10));                                 // 1
console.log(fn(99));                                 // 18 → 9
console.log(fn(123));                                // 6
console.log(fn(999));                                // 27 → 9
console.log(fn(1));                                  // 1
console.log(fn(0));                                  // 0
console.log(fn(456));                                // 15 → 6
console.log(fn(1234));                               // 10 → 1
console.log(fn(9999));                               // 36 → 9