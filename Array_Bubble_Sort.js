function fn(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
            
        }
        
    }
  return arr;
}


console.log(fn([64, 34, 25, 12, 22, 11, 90]));               // [11, 12, 22, 25, 34, 64, 90]
console.log(fn([5, 2, 8, 1, 9]));                             // [1, 2, 5, 8, 9]
console.log(fn([1, 2, 3, 4, 5]));                             // [1, 2, 3, 4, 5]
console.log(fn([5, 4, 3, 2, 1]));                             // [1, 2, 3, 4, 5]
console.log(fn([3]));                                         // [3]
console.log(fn([]));                                          // []
console.log(fn([100, 50, 25, 10, 5]));                        // [5, 10, 25, 50, 100]
console.log(fn([1, 1, 1, 1]));                                // [1, 1, 1, 1]
console.log(fn([-5, 3, -1, 10, 0]));                          // [-5, -1, 0, 3, 10]