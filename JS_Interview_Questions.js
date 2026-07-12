// function mainFunc() {
//     for (let i = 0; i < 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// mainFunc();

// function func(x) {
//     console.log(typeof x, arguments.length);
// }

// func();
// func(7);
// func("1", "2", "3");

// function main() {
//     console.log("A");
//     setTimeout(function print() {
//         console.log("B");
//     }, 0);
//     console.log("C");
// }
// main();


// 100 JavaScript Code Practice Questions for Interviews
// 🧱 1–15: Scope, Hoisting, and Variables

// What will this output?

// console.log(a);
// var a = 5;

// console.log(a);
// let a = 5;

// var a = 10;
// function test() {
//   console.log(a);
//   var a = 20;
// }
// test();

// let x = 1;
// {
//   let x = 2;
//   console.log(x);
// }
// console.log(x);

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// console.log(typeof undefined == typeof NULL);

// var x = 5;
// var x = 10;
// console.log(x);

// const a = {};
// a.name = "Harry";
// console.log(a);

// const arr = [1, 2];
// arr.push(3);
// console.log(arr);

// console.log(typeof NaN);

// console.log(1 + "2" + "2");

// console.log(1 + +"2" + "2");

// console.log("A" - 1);

// console.log("5" - - "2");

// ⚙️ 16–30: Functions and Arguments
// function foo(x, y) {
//   console.log(arguments.length);
// }
// foo(1);

// function foo() {
//   console.log(arguments[0]);
// }
// foo();

// function sum(a, b = 5) {
//   console.log(a + b);
// }
// sum(3);

// const f = function() {
//   console.log("Hello");
// };
// f();

// console.log(typeof function() {});

// (function() {
//   console.log("IIFE called");
// })();

// var a = 10;
// (function() {
//   console.log(a);
//   var a = 20;
// })();

// const func = (a, b, c) => {
//   console.log(a, b, c);
// };
// func(1, 2);

// function greet(name) {
//   return function() {
//     console.log("Hello " + name);
//   };
// }
// greet("Harry")();

// function test() {
//   console.log(this);
// }
// test();

// const obj = { val: 42, fn() { console.log(this.val); } };
// const f = obj.fn;
// f();

// const obj = { val: 42, fn() { console.log(this.val); } };
// obj.fn();

// const obj = { a: 10 };
// function show() { console.log(this.a); }
// show.call(obj);

// const obj = { a: 10 };
// function show(b) { console.log(this.a + b); }
// show.apply(obj, [5]);

// const show = () => console.log(this);
// show();

// 🔁 31–45: Closures and Lexical Scope
// function outer() {
//   let count = 0;
//   return function() {
//     count++;
//     console.log(count);
//   };
// }
// const counter = outer();
// counter();
// counter();

// function outer() {
//   var x = 10;
//   function inner() {
//     console.log(x);
//   }
//   return inner;
// }
// const fn = outer();
// fn();

// let x = 1;
// function a() {
//   let x = 2;
//   function b() {
//     console.log(x);
//   }
//   b();
// }
// a();

// function makeAdder(x) {
//   return function(y) {
//     return x + y;
//   };
// }
// const add5 = makeAdder(5);
// console.log(add5(3));

// function buildFuncs() {
//   const arr = [];
//   for (var i = 0; i < 3; i++) {
//     arr.push(() => console.log(i));
//   }
//   return arr;
// }
// const funcs = buildFuncs();
// funcs[0]();

// function buildFuncs() {
//   const arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr.push(() => console.log(i));
//   }
//   return arr;
// }
// const funcs = buildFuncs();
// funcs[0]();

// var a = 1;
// function foo() {
//   console.log(a);
//   var a = 2;
// }
// foo();

// let count = 0;
// const inc = () => ++count;
// console.log(inc());
// console.log(inc());


// (function(x) {
//   return (function(y) {
//     console.log(x);
//   })(2);
// })(1);

// function x() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }
// }
// x();

// ⏳ 46–60: Event Loop and Asynchronous Behavior
// console.log("A");
// setTimeout(() => console.log("B"), 0);
// console.log("C");

// setTimeout(() => console.log("A"), 0);
// Promise.resolve().then(() => console.log("B"));
// console.log("C");

// console.log(1);
// setTimeout(() => console.log(2));
// Promise.resolve().then(() => console.log(3));
// console.log(4);

// async function foo() {
//   console.log(1);
//   await Promise.resolve();
//   console.log(2);
// }
// foo();
// console.log(3);

// setTimeout(() => console.log("Timeout"), 0);
// queueMicrotask(() => console.log("Microtask"));
// console.log("End");

// console.log("Start");
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

// function fn() {
//   console.log("start");
//   setTimeout(() => console.log("timeout"), 0);
//   console.log("end");
// }
// fn();

// console.log("Hi");
// setTimeout(() => console.log("JS"), 0);
// console.log("Bye");

// setTimeout(() => console.log(1));
// setTimeout(() => console.log(2));
// console.log(3);

// console.log("A");
// Promise.resolve().then(() => console.log("B"));
// console.log("C");

// async function test() {
//   console.log("X");
//   const res = await Promise.resolve("Y");
//   console.log(res);
// }
// test();
// console.log("Z");

// console.log("Start");
// setTimeout(() => console.log("Timer"), 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("End");

// setTimeout(() => console.log("1"), 100);
// setTimeout(() => console.log("2"), 0);

// function main() {
//   setTimeout(() => console.log("B"), 0);
//   console.log("A");
// }
// main();

// function test() {
//   for (let i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), i * 1000);
//   }
// }
// test();

// 📦 61–80: Objects, Arrays, and this
// const user = { name: "Harry" };
// const admin = user;
// admin.name = "John";
// console.log(user.name);

// const obj = { a: 10 };
// const copy = obj;
// copy.a = 20;
// console.log(obj.a);

// let arr = [1, 2, 3];
// let arr2 = arr;
// arr2.push(4);
// console.log(arr);

// const person = {
//   name: "Harry",
//   say() {
//     console.log(this.name);
//   }
// };
// const f = person.say;
// f();

// const person = {
//   name: "Harry",
//   say: () => console.log(this.name)
// };
// person.say();

// const obj = { val: 10 };
// Object.freeze(obj);
// obj.val = 20;
// console.log(obj.val);

// const x = { a: 1, b: 2 };
// const y = { ...x, b: 3 };
// console.log(y);

// const a = [1, 2];
// const b = [...a];
// b.push(3);
// console.log(a);

// const user = { name: "Harry" };
// console.log("name" in user);

// const obj = { a: 1 };
// delete obj.a;
// console.log(obj);

// const obj = { a: 1 };
// console.log(Object.keys(obj).length);

// const data = { a: 1, b: 2 };
// for (let key in data) console.log(key);

// const arr = [10, 20, 30];
// for (let i in arr) console.log(i);

// const arr = [10, 20, 30];
// for (let val of arr) console.log(val);

// const arr = [1, 2, 3];
// arr[5] = 10;
// console.log(arr.length);

// const arr = [1, 2, 3];
// arr.length = 1;
// console.log(arr);

// console.log([1, 2, 3] == [1, 2, 3]);

// console.log({} == {});

// console.log([] + []);

// console.log([] + {});

// 🧮 81–100: Miscellaneous Tricky Questions
// console.log(true + true);

// console.log(false == 0);

// console.log(false === 0);

// console.log(0.1 + 0.2 === 0.3);

// console.log([] == 0);

// console.log("5" == 5);

// console.log("5" === 5);

// console.log(null == undefined);

// console.log(null === undefined);

// console.log(typeof null);

// console.log(typeof []);

// console.log(typeof NaN);

// console.log(isNaN("hello"));

// console.log(isNaN("123"));

// console.log(parseInt("10px"));

// console.log(parseFloat("10.5abc"));

// console.log(!!"false");

// console.log(!!undefined);

// console.log(+"100");

// console.log(Number("Hello"));


