arr = [1,2,65,34,23,76,45,32,54,23,4,6,1]
function findLargest(arr){
    let n = arr.length;
    let largestnum = arr[0];

    for(let i = 0; i < n; i++){
        if(largestnum < arr[i]){
            largestnum = arr[i]
        }
    }
    return largestnum;
}

// console.log("Largest number from array", findLargest(arr));

// using inbuilt method
 const largestnum = arr.reduce((max,num) => num > max ? num : max, arr[0]);
 console.log("largest",largestnum);
    