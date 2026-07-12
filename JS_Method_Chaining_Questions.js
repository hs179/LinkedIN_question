
// -------------------------------------------------------------------------
// 🔗 5 Practice Questions: Method Chaining (Fluent Interface Pattern)
// -------------------------------------------------------------------------
// The goal is to create functions that return an object where methods return 'this'
// to allow chaining, ending with a method to retrieve the final result.

// Exampel :
// 1️⃣ Closures
// 2️⃣ Method Chaining
// 3️⃣ Encapsulation / Data Privacy
// 4️⃣ Factory Functions
// 5️⃣ String Immutability
// 6️⃣ Functional Programming Concepts (Light)

// ==========================================
// 1. String Builder
// ==========================================
// Q: Create a function 'stringBuilder(str)' that allows chaining:
// - append(s): adds string 's' to the end
// - prepend(s): adds string 's' to the start
// - upper(): converts current string to uppercase
// - get(): returns the final string

// Example usage:
// console.log(stringBuilder("Hello").append(" World").prepend("Say: ").upper().get());
// Expected Output: "SAY: HELLO WORLD"


// function stringBuilder(str){
//     return {
//         append(s){
//             str= str + s
//             return this;
//         },
//         prepend(s){
//             str = s + str
//             return this;
//         },
//         upper(){
//             str= str.toUpperCase();
//             return this;
//         },
//         get(){
//             return str
//         }
//     }
// }

// console.log(stringBuilder("Hello").append(" World").prepend("Say: ").upper().get());


// ==========================================
// 2. Simple Calculator (Multiplication & Division)
// ==========================================
// Q: Create a function 'calc(startValue)' that extends your previous example:
// - multiply(n): multiplies current value by n
// - divide(n): divides current value by n
// - power(n): raises current value to power of n
// - getVal(): returns the result

// Example usage:
// console.log(calc(2).multiply(5).divide(2).power(2).getVal());
// Expected Output: 25   ((2 * 5 / 2) ^ 2)

// function calc(startValue){
//     return {
//         multiply(n){
//            startValue = startValue * n;
//            return this;
//         },
//         divide(n){
//             startValue = startValue / n;
//             return this;
//         },
//         power(n){
//             startValue = startValue ** n;
//             return this;
//         },
//         getVal(){
//             return startValue;
//         }
//     };
// }

// console.log(calc(2).multiply(5).divide(2).power(2).getVal());


// ==========================================
// 3. Array Manipulator
// ==========================================
// Q: Create a function 'arrayChain(arr)' that wraps an array:
// - add(element): adds element to end
// - removeLast(): removes last element
// - doubleAll(): doubles every number in array (if numbers)
// - getArray(): returns the array

// Example usage:
// console.log(arrayChain([1, 2]).add(3).doubleAll().removeLast().getArray());
// Expected Output: [2, 4] ( [1,2] -> [1,2,3] -> [2,4,6] -> [2,4] )



// function arrayChain(arr){
//     return {
//         add(element){
//         arr.push(element)
//         console.log("add", arr)
//         return this;
//         },
//         removeLast(){
//             arr.pop()
//              console.log("remove", arr)
//             return this;
//         },
//         doubleAll(){
//             arr = arr.map(value => value*2)
//              console.log("double", arr)
//             return this;
//         },
//         getArray(){
//             return arr;
//         }
//     }
// }
// console.log(arrayChain([1, 2]).add(3).doubleAll().removeLast().getArray());


// ==========================================
// 4. Shopping Cart
// ==========================================
// Q: Create a function 'cart()' giving an empty cart:
// - addItem(name, price): adds item to list
// - removeItem(name): removes item by name
// - getTotal(): returns total price

// Example usage:
// console.log(
//   cart()
//     .addItem("Apple", 10)
//     .addItem("Banana", 5)
//     .addItem("Orange", 8)
//     .removeItem("Banana")
//     .getTotal()
// );
// Expected Output: 18



// function cart() {
//     let item = [];

//     return {
//         addItem(name, price) {
//             item.push({ name, price });
//             return this;
//         },

//         removeItem(name) {
//             item = item.filter(value => value.name !== name);
//             return this;
//         },

//         getTotal() {
//             return item.reduce((acc, curr) => acc + curr.price, 0);
//         }
//     };
// }



