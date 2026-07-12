const nestedobj = { a: 1, b: { c: 2, d: { e: 3 } } };
const keyArray = [];
const pairArray = [];

function extractpair(obj) {
for (let key in obj) {
if (typeof obj[key] === 'object' && obj[key] !== null) {
extractpair(obj[key]);
} else {
keyArray.push(key);
pairArray.push(obj[key]);
}
}
return {keyArray,pairArray}
}

console.log(extractpair(nestedobj));
// { keyArray: [ 'a', 'c', 'e' ], pairArray: [ 1, 2, 3 ] }
