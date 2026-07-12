function fn(str){
    const arr = []
    const obj = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    for(let char of str){
      if(char == "(" || char == "{" || char == "["){
            arr.push(char)
      }else if(char == ")" || char == "}" || char == "]"){
        if(obj[char] !== arr.pop()){
          return false
        }
      }
     
        
    }
return arr.length === 0;
}

console.log(fn("()"));       
console.log(fn("()[]{}"));    
console.log(fn("(]"));        
console.log(fn("([)]"));      
console.log(fn("{[]}"));