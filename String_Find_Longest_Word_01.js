str= "The sky turned orange as the sun dipped below the mountain peaks, signaling the end of a peaceful day"

function fn(str){
    return word = str.split(" ").sort((a,b) => b.length - a.length)[0]
}

console.log("longest word --> ",fn(str))



