arr=[1,2,4,3,43,23,34,34,54,32,23,12,23,19,4,5,3]
function fn(arr,target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] == target){
                return [arr[i], arr[j]]
            }
        }
    }
return null;
}

console.log(fn(arr,77));