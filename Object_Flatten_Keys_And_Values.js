const input = { a: 1, b: { c: 2, d: { e: 3 } } };

function fn(obj, parentKey = '', result = {}) { 
    for (let key in obj) {
        const newkey = parentKey ? `${parentKey}.${key}` : key;

        if (typeof obj[key] === 'object' && obj[key] !== null) {
            fn(obj[key], newkey, result);
        } else {
            result[newkey] = obj[key];
        }
    }
    
    return {
        keys: Object.keys(result), 
        values: Object.values(result) 
    };
}

console.log(fn(input));
// { keys: [ 'a', 'b.c', 'b.d.e' ], values: [ 1, 2, 3 ] }
