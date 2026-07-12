const ids = [1, 2, 4, 5];

// Step 1: Total numbers should be from 1 to 5
let n = ids.length + 1; // 4 + 1 = 5

// Step 2: Sum of numbers from 1 to n
let expectedvalue = n * (n + 1) / 2;
console.log(expectedvalue); // 15

// Step 3: Sum of existing array elements
let sum = ids.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 12

// Step 4: Missing number
let value = expectedvalue - sum;
console.log(value); // 3
