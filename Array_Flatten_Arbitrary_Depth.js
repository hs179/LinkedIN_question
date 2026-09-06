// Input: nested array + depth [1,[2,[3,[4]]]], 
// Output: [1,2,3,[4]]. Flatten only up to given depth, no flat().

function fn(arr, depth){
    let result = []
    for(let value of arr){
        if(Array.isArray(value) && depth > 0){
             result.push(...fn(value, depth-1))
        }else{
            result.push(value)
        }
    }
   return result;
}

arr = [1,[2,[3,[4]]]]
console.log(fn(arr,1))
