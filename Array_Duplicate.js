arr = [1,1,2,2,3,4,5,5]
function duplicateNumber(arr){
   let duplicate = []
   let seen = []

   for(let i=0; i <=arr.length -1; i++){
    if (seen.includes(arr[i])) {
    if(!duplicate.includes(arr[i])){
        duplicate.push(arr[i])
    }  } else {
        seen.push(arr[i]);
    }

   }
   return duplicate;
}


function NonduplicateNumber(arr){
    let duplicate = []
   
 
    for(let i=0; i <=arr.length -1; i++){
    
     if(!duplicate.includes(arr[i])){
         duplicate.push(arr[i])
     } 
 
    }
    return duplicate;
 }


console.log("duplicate arr",duplicateNumber(arr));
console.log("non-duplicate arr",NonduplicateNumber(arr));

