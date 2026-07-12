function fn(str1, str2){
    newstr1 = str1.toLowerCase().split('').sort().join('')
    newstr2 = str2.toLowerCase().split('').sort().join('')
    if(newstr1 == newstr2){
        return true;
    }else{
         return false
    }
   
    
    
}

console.log(fn('listen','silent'))