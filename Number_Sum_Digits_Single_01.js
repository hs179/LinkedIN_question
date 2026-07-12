// Sum of Digits Until a Single Digit
function fn(num){
    sum = 0
    while(num > 9){
       num = String(num).split("").reduce((acc,sum) => Number(sum) + Number(acc),0)
       
    }
    return num;
  
}

console.log(fn(38));
