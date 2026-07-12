const users = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" },
  { id: 3, name: "C" }
];

// Output:
// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 3, name: "C" }
// ]

const result = users.reduce((acc,curr) => {
    if(!acc.some(user => user.name === curr.name)){
        acc.push(curr)
    }
    return acc
},[])

console.log(result)



// const seen = new Set();

// const result = users.filter(user => {
//     if (seen.has(user.name)) {
//         return false;
//     }

//     seen.add(user.name);
//     return true;
// });

// console.log(result);