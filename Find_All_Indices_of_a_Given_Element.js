
function fn(value){
    str = "himanshu"
    arr= []
    for(let i=0; i < str.length; i++){
        if(value == str[i]){
            arr.push(i)
        }
    }
    return arr
}

console.log(fn("h"))