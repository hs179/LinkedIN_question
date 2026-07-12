function fn(arr){
    let largest = -Infinity
    let secondLargest = -Infinity
    for(let value of arr){
        if(largest < value){
            secondLargest = largest;
            largest = value
        }else if(value > secondLargest && value < largest){
            secondLargest = value
        }
    }
   return secondLargest === -Infinity ? null : secondLargest;

}

console.log(fn([1, 2, 65, 34, 23, 76, 45, 32, 54, 23, 4, 6, 1]));  // 65
console.log(fn([12, 23, 34, 54]));                                   // 34
console.log(fn([100, 50, 25, 10, 5]));                               // 50
console.log(fn([5, 5, 5, 5]));                                       // 5
console.log(fn([1, 2]));                                             // 1
console.log(fn([10, 9, 8, 7, 6]));                                   // 9
console.log(fn([-5, -10, -1, -100]));                                // -5
console.log(fn([42, 100, 50, 75]));                                  // 75
console.log(fn([1, 3, 5, 7, 9]));                                    // 7