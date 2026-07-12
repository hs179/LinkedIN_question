function fn(users, bannedIds){
    return users.filter(user => !bannedIds.includes(user.id))
}

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' }
];
const bannedIds = [1, 3];


console.log(fn(users, bannedIds));
// [{ id: 2, name: 'Bob' }, { id: 4, name: 'Diana' }]

const products = [
  { id: 101, name: 'Laptop', price: 1000 },
  { id: 102, name: 'Phone', price: 500 },
  { id: 103, name: 'Tablet', price: 300 }
];
const blockedIds = [102];

console.log(fn(products, blockedIds));
// [{ id: 101, name: 'Laptop', price: 1000 }, { id: 103, name: 'Tablet', price: 300 }]

console.log(fn(users, []));
// [All 4 users] (no exclusions)

console.log(fn([], [1, 2, 3]));
// []

console.log(fn(users, [1, 2, 3, 4]));
// []