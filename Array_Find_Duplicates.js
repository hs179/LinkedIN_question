function fn(arr){
    let seen = []
    let duplicate = []

    for(let value of arr){
        if(!seen.includes(value)){
            seen.push(value)   // first time → store in seen
        } else {
            if(!duplicate.includes(value)){
                duplicate.push(value)  // already seen → duplicate
            }
        }
    }
    
   return {"duplicates":duplicate,"nonDuplicates":seen}
}


console.log(fn([1, 1, 2, 2, 3, 4, 5, 5]));                    // { duplicates: [1, 2, 5], nonDuplicates: [3, 4] }
console.log(fn([1, 2, 3, 4, 5]));                              // { duplicates: [], nonDuplicates: [1, 2, 3, 4, 5] }
console.log(fn([1, 1, 1, 1]));                                 // { duplicates: [1], nonDuplicates: [] }
console.log(fn([]));                                           // { duplicates: [], nonDuplicates: [] }
console.log(fn([5]));                                          // { duplicates: [], nonDuplicates: [5] }
console.log(fn([1, 2, 1, 2, 3, 3, 4]));                        // { duplicates: [1, 2, 3], nonDuplicates: [4] }
console.log(fn([10, 20, 10, 30, 20]));                         // { duplicates: [10, 20], nonDuplicates: [30] }