
// -------------------------------------------------------------------------
// 🚀 40+ JS Practice Questions: Objects, Arrays, and Combined Transformations
// -------------------------------------------------------------------------

// ==========================================
// 🏗️ SECTION 1: OBJECTS BASICS & MANIPULATION
// ==========================================

// 1. Accessing Properties
// const user = { name: "Alice", age: 25, "is Admin": true };
// // Q: Log the "is Admin" property.
// // Expected: true

// 2. Dynamic Property Access
// const key = "age";
// const user = { name: "Bob", age: 30 };
// // Q: Use the variable 'key' to access the value 30.
// // Expected: 30

// 3. Deleting Properties
// const obj = { a: 1, b: 2, c: 3 };
// // Q: Delete property 'b' from the object.
// // Expected: { a: 1, c: 3 }

// 4. Object.keys()
// const scores = { math: 90, english: 85, science: 92 };
// // Q: Get an array of all subject names.
// // Expected: ["math", "english", "science"]

// 5. Object.values()
// const scores = { math: 90, english: 85, science: 92 };
// // Q: Calculate the sum of all scores.
// // Expected: 267

// 6. Object.entries()
// const user = { name: "Charlie", role: "Developer" };
// // Q: Convert this object into an array of arrays like [["name", "Charlie"], ["role", "Developer"]]

// 7. Shorthand Property Names
// const name = "David";
// const age = 40;
// // Q: Create an object { name: "David", age: 40 } using shorthand syntax.

// 8. Checking Property Existence
// const settings = { theme: "dark", notifications: true };
// // Q: Check if "autoSave" exists in settings.
// // Expected: false

// 9. Object.freeze()
// const config = { port: 3000 };
// Object.freeze(config);
// config.port = 5000;
// // Q: What is the value of config.port after this line?
// // Expected: 3000

// 10. Object Cloning (Shallow)
// const original = { a: 1, b: { c: 2 } };
// // Q: Create a shallow copy of 'original' using the spread operator.


// ==========================================
// 📋 SECTION 2: ARRAY METHODS & BASICS
// ==========================================

// 11. Array.map() - Basic
// const nums = [1, 2, 3, 4];
// // Q: Return a new array where each number is squared.
// // Expected: [1, 4, 9, 16]

// 12. Array.filter() - Basic
// const ages = [15, 22, 18, 10, 30];
// // Q: Filter out ages under 18.
// // Expected: [22, 18, 30]

// 13. Array.find()
// const items = [{id: 1, val: 10}, {id: 2, val: 20}, {id: 3, val: 10}];
// // Q: Find the FIRST item with val: 10.
// // Expected: {id: 1, val: 10}

// 14. Array.reduce() - Sum
// const expenses = [100, 200, 50, 300];
// // Q: Calculate total expenses using reduce.
// // Expected: 650

// 15. Array.concat()
// const arr1 = [1, 2];
// const arr2 = [3, 4];
// // Q: Merge these two arrays.
// // Expected: [1, 2, 3, 4]

// 16. Array.includes()
// const roles = ["admin", "editor", "viewer"];
// // Q: Check if "superadmin" exists in the array.
// // Expected: false

// 17. Array.reverse() Mutation
// const arr = [1, 2, 3];
// const reversed = arr.reverse();
// // Q: What is the value of 'arr' now?
// // Expected: [3, 2, 1] (It mutates the original!)

// 18. Array.splice()
// const letters = ["a", "b", "c", "d"];
// // Q: Remove "c" and add "x", "y" in its place using splice.
// // Expected: ["a", "b", "x", "y", "d"]

// 19. Flattening Arrays
// const nested = [1, [2, 3], [4, [5]]];
// // Q: Flatten this array one level deep.
// // Expected: [1, 2, 3, 4, [5]]

// 20. Removing Duplicates
// const nums = [1, 2, 2, 3, 3, 3, 4];
// // Q: Return a unique array.
// // Expected: [1, 2, 3, 4]


// ==========================================
// 🧩 SECTION 3: GROUPING & DATA TRANSFORMATION (USER REQUESTED)
// ==========================================

// 21. Group by Property (Simple)
// const users = [
//     {name: "A", city: "Delhi"},
//     {name: "B", city: "Noida"},
//     {name: "C", city: "Delhi"}
// ];
// // Q: Group users by city.
// // Expected:
// // {
// //    Delhi: [{name: "A", city: "Delhi"}, {name: "C", city: "Delhi"}],
// //    Noida: [{name: "B", city: "Noida"}]
// // }

// 22. Array to Object (Indexing by ID)
// const products = [
//     {id: 101, name: "Laptop"},
//     {id: 102, name: "Phone"},
//     {id: 103, name: "Tablet"}
// ];
// // Q: Convert array to an object indexed by ID.
// // Expected:
// // {
// //    "101": {id: 101, name: "Laptop"},
// //    "102": {id: 102, name: "Phone"},
// //    "103": {id: 103, name: "Tablet"}
// // }

// 23. Counting Occurrences
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // Q: Create an object counting their frequency.
// // Expected: { apple: 3, banana: 2, orange: 1 }

// 24. Grouping by Condition
// const numbers = [1, 2, 3, 4, 5, 6];
// // Q: Group numbers into "odd" and "even".
// // Expected: { odd: [1, 3, 5], even: [2, 4, 6] }

// 25. Merging Objects in Array by Key
// const orders = [
//     { userId: 1, amount: 100 },
//     { userId: 1, amount: 50 },
//     { userId: 2, amount: 200 }
// ];
// // Q: Sum amounts per userId.
// // Expected: { "1": 150, "2": 200 } // Or [{userId: 1, amount: 150}, ...]

// 26. Mapping Values in Object
// const users = {
//     "u1": { name: "Alice", age: 25 },
//     "u2": { name: "Bob", age: 30 }
// };
// // Q: Extract just the names into an array.
// // Expected: ["Alice", "Bob"]

// 27. Filtering Object Keys
// const scores = { math: 60, science: 35, history: 80, english: 40 };
// // Q: Return an object with only subjects having score >= 50.
// // Expected: { math: 60, history: 80 }

// 28. Nested Grouping (Advanced)
// const employees = [
//     { dept: "Engineering", role: "Dev", name: "A" },
//     { dept: "Engineering", role: "Dev", name: "B" },
//     { dept: "Engineering", role: "Manager", name: "C" },
//     { dept: "HR", role: "Recruiter", name: "D" }
// ];
// // Q: Group by Dept first, then by Role.
// // Expected:
// // {
// //   Engineering: { Dev: [...], Manager: [...] },
// //   HR: { Recruiter: [...] }
// // }

// 29. Reformatting Array of Objects
// const raw = [
//     { key: "name", value: "Alice" },
//     { key: "age", value: 25 },
//     { key: "city", value: "Paris" }
// ];
// // Q: Transform into a single object.
// // Expected: { name: "Alice", age: 25, city: "Paris" }

// 30. Swapping Keys and Values
// const currencies = { USA: "USD", India: "INR", Europe: "EUR" };
// // Q: Invert the object so values become keys.
// // Expected: { USD: "USA", INR: "India", EUR: "Europe" }


// ==========================================
// 🌪️ SECTION 4: COMPLEX CHALLENGES
// ==========================================

// 31. Deep Flatten Object
// const obj = {
//     a: 1,
//     b: { c: 2, d: { e: 3 } }
// };
// // Q: Flatten to single level: { a: 1, "b.c": 2, "b.d.e": 3 }

// ANSWER OF 31 QUESTION
//  function fn(obj,parentkey= "", result={}){
//  for(let key in obj){
//        const newkey = parentkey ? `${parentkey}.${key}`: key;

//     if(typeof obj[key] == 'object' && obj[key] !== null){   
//       fn(obj[key],newkey,result)
//     }else{
//         result[newkey] = obj[key]
//     }
//  }
//  return result;
//  }
 
//  console.log(fn(obj))

// 32. Find Missing ID
// const ids = [1, 2, 4, 5];
// // Q: Find the missing number from the sequence 1 to 5.
// // Expected: 3

// 33. Sort Array of Objects by Multiple Properties
// const people = [
//     { name: "A", age: 30 },
//     { name: "A", age: 20 },
//     { name: "B", age: 25 }
// ];
// // Q: Sort by name (asc), then by age (asc).
// // Expected: [{name:"A", age:20}, {name:"A", age:30}, {name:"B", age:25}]

// 34. Intersection of Two Arrays of Objects
// const list1 = [{id: 1}, {id: 2}];
// const list2 = [{id: 2}, {id: 3}];
// // Q: Find items that exist in both lists (by id).
// // Expected: [{id: 2}]

// 35. Deep Freeze
// const user = { info: { name: "A" } };
// Object.freeze(user);
// user.info.name = "B";
// // Q: Write a function deepFreeze(obj) so that nested properties also can't be changed.

// 36. Truthy Values Count
// const values = [0, 1, "hello", "", null, undefined, {}, []];
// // Q: Count how many values are "truthy".
// // Expected: 5 (1, "hello", {}, [])

// 37. Get Query Param - String to Object
// const url = "https://example.com?page=2&sort=asc&q=hello";
// // Q: Parse the query string into an object.
// // Expected: { page: "2", sort: "asc", q: "hello" }

// 38. Safe Deep Access (Optional Chaining alternative)
// const data = { user: { profile: null } };
// // Q: Write a function constant getCity = (obj) => ... that safely returns 'city' or 'Unknown' without throwing error.

// 39. Transform Tree Structure
// const categories = [
//     { id: '1', parent: '0' },
//     { id: '2', parent: '1' },
//     { id: '3', parent: '1' },
//     { id: '4', parent: '2' },
// ];
// // Q: Convert flat list to nested tree based on parent ID.

// 40. Custom 'GroupBy' implementation
// // Q: Write a function groupBy(arr, key) that works like the Lodash/new JS feature.

// 41. Deep Merge Objects
// const obj1 = { a: 1, b: { x: 10 } };
// const obj2 = { b: { y: 20 }, c: 3 };
// // Q: Merge deep properties.
// // Expected: { a: 1, b: { x: 10, y: 20 }, c: 3 }

