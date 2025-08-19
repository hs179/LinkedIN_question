arr = [1,2,1,2,4,4,3,2,6,7,5,5,4,10]

function numberOfOccurance(arr){
    let n = arr.length
    occurance = {}
    for(let i=0; i <= n-1; i++){
        if(occurance[arr[i]]){
            occurance[arr[i]] += 1
        }else{
            occurance[arr[i]] = 1
        }
    }
    return occurance;
}

console.log(numberOfOccurance(arr));
