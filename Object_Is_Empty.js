function fn(obj){
    return Object.keys(obj).length == 0;
}

console.log(fn({}));                                  // true
console.log(fn({name: "John"}));                     // false
console.log(fn({a: 1, b: 2}));                       // false
console.log(fn({name: "", age: 0}));                 // false
console.log(fn({id: null}));                         // false
console.log(fn(Object.create(null)));                // true
console.log(fn({x: undefined}));                     // false
console.log(fn(Object.assign({}, {})));              // true
console.log(fn({key: "value", nested: {}}));         // false
