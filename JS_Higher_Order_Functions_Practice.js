// ========================================================================
// 🚀 Higher-Order Functions Practice: Map, Filter, Reduce
// ========================================================================
// This file contains practice questions to master JavaScript's powerful array methods.
// Sections:
// 1. Map (Transformation)
// 2. Filter (Selection)
// 3. Reduce (Accumulation)
// 4. Chaining (Combination)
// 5. Polyfills (Implementation)

// ==========================================
// 1️⃣ Map (Transformation)
// ==========================================

// Q1: Square all numbers in an array.
// Input: [2, 3, 4, 5] --> Output: [4, 9, 16, 25]
const numbers = [2, 3, 4, 5];
// TODO: Write your code here

const q1Result = numbers.map(num => num * num);
console.log("Q1:", q1Result);


// Q2: Convert an array of strings to uppercase.
// Input: ["hello", "world"] --> Output: ["HELLO", "WORLD"]
const strings = ["hello", "world"];
// TODO: Write your code here

const q2Result = strings.map(str => str.toUpperCase());
console.log("Q2:", q2Result);


// Q3: Extract names from an array of user objects.
// Input: [{name: "Alice", age: 25}, {name: "Bob", age: 30}] --> Output: ["Alice", "Bob"]
const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
// TODO: Write your code here

const q3Result = users.map(user => user.name);
console.log("Q3:", q3Result);


// ==========================================
// 2️⃣ Filter (Selection)
// ==========================================

// Q4: Filter out even numbers.
// Input: [1, 2, 3, 4, 5, 6] --> Output: [1, 3, 5]
const numsToFilter = [1, 2, 3, 4, 5, 6];
// TODO: Write your code here

const q4Result = numsToFilter.filter(num => num % 2 !== 0);
console.log("Q4:", q4Result);


// Q5: Filter strings with length greater than 5.
// Input: ["apple", "banana", "kiwi", "watermelon"] --> Output: ["banana", "watermelon"]
const fruits = ["apple", "banana", "kiwi", "watermelon"];
// TODO: Write your code here

const q5Result = fruits.filter(fruit => fruit.length > 5);
console.log("Q5:", q5Result);


// Q6: Filter active users (isActive: true).
// Input: [{id: 1, isActive: true}, {id: 2, isActive: false}, {id: 3, isActive: true}]
// Output: [{id: 1, isActive: true}, {id: 3, isActive: true}]
const userStatus = [
    { id: 1, isActive: true },
    { id: 2, isActive: false },
    { id: 3, isActive: true }
];
// TODO: Write your code here

const q6Result = userStatus.filter(user => user.isActive);
console.log("Q6:", q6Result);


// ==========================================
// 3️⃣ Reduce (Accumulation)
// ==========================================

// Q7: Sum of all numbers.
// Input: [1, 2, 3, 4] --> Output: 10
const sumNums = [1, 2, 3, 4];
// TODO: Write your code here

const q7Result = sumNums.reduce((acc, curr) => acc + curr, 0);
console.log("Q7:", q7Result);


// Q8: Product of all numbers.
// Input: [1, 2, 3, 4] --> Output: 24
// TODO: Write your code here

const q8Result = sumNums.reduce((acc, curr) => acc * curr, 1);
console.log("Q8:", q8Result);


// Q9: Count occurrences of elements (Frequency Map).
// Input: ["a", "b", "a", "c", "b", "a"] --> Output: {a: 3, b: 2, c: 1}
const letters = ["a", "b", "a", "c", "b", "a"];
// TODO: Write your code here

const q9Result = letters.reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
}, {});
console.log("Q9:", q9Result);


// Q10: Group objects by a property (e.g., age).
// Input: [{name: "Alice", age: 21}, {name: "Bob", age: 21}, {name: "Charlie", age: 25}]
// Output: { "21": [{name: "Alice"...}, {name: "Bob"...}], "25": [{name: "Charlie"...}] }
const people = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 25 }
];
// TODO: Write your code here

const q10Result = people.reduce((acc, person) => {
    const age = person.age;
    if (!acc[age]) {
        acc[age] = [];
    }
    acc[age].push(person);
    return acc;
}, {});
console.log("Q10:", q10Result);


// ==========================================
// 4️⃣ Chaining (Map + Filter + Reduce)
// ==========================================

// Q11: Sum of squares of positive numbers.
// Input: [-2, 4, -5, 3] --> Positive: [4, 3] --> Squares: [16, 9] --> Sum: 25
const mixedNums = [-2, 4, -5, 3];
// TODO: Write your code here

const q11Result = mixedNums
    .filter(num => num > 0)
    .map(num => num * num)
    .reduce((acc, curr) => acc + curr, 0);
console.log("Q11:", q11Result);


// Q12: Get names of active users sorted by age (ascending).
// Input: [
//   { name: "Alice", age: 25, isActive: true },
//   { name: "Bob", age: 22, isActive: true },
//   { name: "Charlie", age: 30, isActive: false }
// ]
// Output: ["Bob", "Alice"]
const complexUsers = [
    { name: "Alice", age: 25, isActive: true },
    { name: "Bob", age: 22, isActive: true },
    { name: "Charlie", age: 30, isActive: false }
];
// TODO: Write your code here

const q12Result = complexUsers
    .filter(user => user.isActive)
    .sort((a, b) => a.age - b.age)
    .map(user => user.name);
console.log("Q12:", q12Result);


// Q13: Calculate total price of items in their cart, but only for items > 50.
// Input: [{item: "A", price: 40}, {item: "B", price: 60}, {item: "C", price: 80}]
// Output: 140 (60 + 80)
const cart = [
    { item: "A", price: 40 },
    { item: "B", price: 60 },
    { item: "C", price: 80 }
];
// TODO: Write your code here

const q13Result = cart
    .filter(product => product.price > 50)
    .reduce((acc, product) => acc + product.price, 0);
console.log("Q13:", q13Result);


// ==========================================
// 5️⃣ Polyfills (Interview Favorites)
// ==========================================

// Q14: Implement custom myMap(callback)
// Array.prototype.myMap = function(callback) { ... }

Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Test myMap
console.log("Q14 (myMap):", [1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]


// Q15: Implement custom myFilter(callback)
// Array.prototype.myFilter = function(callback) { ... }

Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Test myFilter
console.log("Q15 (myFilter):", [1, 2, 3, 4].myFilter(x => x % 2 === 0)); // [2, 4]


// Q16: Implement custom myReduce(callback, initialValue)
// Array.prototype.myReduce = function(callback, initialValue) { ... }

Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
        if (this.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

// Test myReduce
console.log("Q16 (myReduce):", [1, 2, 3, 4].myReduce((acc, curr) => acc + curr, 0)); // 10




// sum
Array.prototype.sum = function () {
    let sum = 0
    for (let i = 0; i < this.length; i++) {
        sum += this[i]
    }
    return sum;
}


console.log([1, 2, 3].sum())
