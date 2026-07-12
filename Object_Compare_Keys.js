function fn(obj1, obj2){
    key1 = Object.keys(obj1).sort()
    key2 = Object.keys(obj2).sort()
    return JSON.stringify(key1)  === JSON.stringify(key2);
}


console.log(fn({a: 1, b: 2}, {b: 5, a: 2}));         // true
console.log(fn({a: 1, b: 2}, {a: 1, b: 2}));         // true
console.log(fn({a: 1, b: 2}, {a: 1, b: 2, c: 3}));   // false
console.log(fn({x: 10}, {x: 20}));                   // true
console.log(fn({name: "John", age: 30}, {age: 25, name: "Jane"}));  // true
console.log(fn({}, {}));                             // true
console.log(fn({a: 1}, {b: 1}));                     // false
console.log(fn({id: 1, name: "", age: null}, {age: undefined, id: 999, name: "test"}));  // true
console.log(fn({x: {nested: "obj"}}, {x: [1, 2, 3]}));  // true
console.log(fn({a: 1, b: 2}, {a: 1, B: 2}));         // false (case-sensitive)