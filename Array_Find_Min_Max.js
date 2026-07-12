arr = [1,2,65,34,23,76,45,32,54,23,4,6,1]
function fn(arr){
    let n = arr.length
    let largest = arr[0]
    let lowest = arr[0]
    for(let i = 0; i <= n -1; i++){
        if(largest < arr[i]){
            largest = arr[i]
        }

        if(lowest > arr[i]){
            lowest = arr[i]
        }
      
    }
   return {lowest, largest}
    
}

console.log( fn(arr));
