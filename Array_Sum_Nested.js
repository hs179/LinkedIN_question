function fnFlat(arr){
    return arr.flat(Infinity).reduce((sum,curr) => {
        return sum+= curr
    },0)
}

function fnRecursive(arr){
    let sum = 0;
    for(let value of arr){
        if(Array.isArray(value)){
          sum+= fnRecursive(value)
        }else{
           sum += value
        }
    }
    return sum;
}




// Using flat() approach
console.log(fnFlat([1, 2, [4], [9]]));                        // 16
console.log(fnFlat([1, 2, [3, 4], 5]));                        // 15
console.log(fnFlat([10, [20, [30, 40]], 50]));                 // 150
console.log(fnFlat([[1, 2], [3, 4], [5, 6]]));                 // 21
console.log(fnFlat([1]));                                      // 1
console.log(fnFlat([]));                                       // 0

// Using recursive approach
console.log(fnRecursive([1, 2, [4], [9]]));                    // 16
console.log(fnRecursive([1, 2, [3, 4], 5]));                   // 15
console.log(fnRecursive([10, [20, [30, 40]], 50]));            // 150
console.log(fnRecursive([[1, 2], [3, 4], [5, 6]]));            // 21
console.log(fnRecursive([1, [2, [3, [4, [5]]]]]));             // 15