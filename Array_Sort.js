// sorting of an array

arr = [1,2,65,34,23,76,45,32,54,23,4,6,1]

function sorting(arr){
    let n = arr.length
    for(let i = 0; i<=n-1; i++){
        for(let j=0; j<=n-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] =[arr[j+1], arr[j]]
            }

        }
    }
return arr;
}

// console.log("sort arr", sorting(arr));


// by using sort in-build method 

const sortarr = arr.sort((a,b) => a - b);
console.log(sortarr);

