
function fn(arr1, arr2){
    const intersection = [...new Set(arr1.filter(value => arr2.includes(value)))]
    const unionset = new Set([...arr1, ...arr2])
    const union = [...unionset]
    
    
    return {"union":union,"intersection":intersection }
}




console.log(fn([1, 2, 3], [3, 4, 5]));                          // { union: [1, 2, 3, 4, 5], intersection: [3] }
console.log(fn([1, 2, 2, 3], [2, 3, 3, 4]));                   // { union: [1, 2, 3, 4], intersection: [2, 3] }
console.log(fn([1, 2, 3], [4, 5, 6]));                          // { union: [1, 2, 3, 4, 5, 6], intersection: [] }
console.log(fn([1, 2, 3], [1, 2, 3]));                          // { union: [1, 2, 3], intersection: [1, 2, 3] }
console.log(fn([], [1, 2, 3]));                                 // { union: [1, 2, 3], intersection: [] }
console.log(fn(['a', 'b'], ['b', 'c']));                        // { union: ['a', 'b', 'c'], intersection: ['b'] }
console.log(fn([1, 1, 2], [2, 2, 3]));                          // { union: [1, 2, 3], intersection: [2] }