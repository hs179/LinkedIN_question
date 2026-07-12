arr = [1,2,3,4,5]
function fn(arr, size){
    newarr = []
    for(let i = 0; i < arr.length; i+= size){
        chunk = arr.slice(i,i+size)
        // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
        // newarr.push(chunk)    
        // [ [ 1, 2 ], [ 3, 4 ], 5 ]
        newarr.push(chunk.length === size ? chunk : chunk[0])
    }
    return newarr;
}

console.log(fn(arr,2))