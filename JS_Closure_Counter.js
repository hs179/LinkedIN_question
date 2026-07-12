function fn(num){
    let counter = num??0;
    return function(){
        return ++counter
    }
}



const counter1 = fn();
console.log(counter1());                              // 1
console.log(counter1());                              // 2
console.log(counter1());                              // 3

const counter2 = fn();
console.log(counter2());                              // 1
console.log(counter2());                              // 2

const counter3 = fn(10);
console.log(counter3());                              // 11
console.log(counter3());                              // 12
console.log(counter3());                              // 13

const counter4 = fn(100);
console.log(counter4());                              // 101
console.log(counter4());                              // 102