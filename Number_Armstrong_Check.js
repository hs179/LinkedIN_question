// An Armstrong number (or narcissistic number) is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
function fn(num){
    
    numarr = num.toString().split("")
    power = numarr.length
    sum =0 
    for(const num of numarr){
        mul = 1;
     for(let i =0; i < power; i++){
        mul = mul * (parseInt(num))
     }
     sum = sum + mul
    }
    return num === sum
}

console.log(fn(153));
 