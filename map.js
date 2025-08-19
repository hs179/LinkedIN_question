
// You are given an array of objects representing a group of students,
//  each with a name and an array of test scores. Your task is to use map,
//   filter, and reduce to calculate the average test score for each student,
//    and then return an array of objects containing only the students who have an average score above 90.

// const students = [
//     { name: "Alice", scores: [90, 85, 92] },
//     { name: "Bob", scores: [75, 80, 85] },
//     { name: "Charlie", scores: [90, 95, 85] },
//     { name: "Jack", scores: [100, 100, 100] }
//   ];

//   const result = students.map(student => {
//   const sum = student.scores.reduce((acc,curr) => acc + curr)
//   return {name : student.name, average: sum/student.scores.length};
//   })

//   const highestaverage = result.filter(e => e.average > 90)

//   console.log(highestaverage);
  


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// const input = [
//     ["a", "b", "c"],
//     ["c", "d", "f"],
//     ["d", "f", "g"],
//   ];

//   const output = input.flat().reduce((acc,curr) => {
//     if(acc[curr]){
//         acc[curr] += 1
//     }else{
//         acc[curr] = 1
//     }

//     return acc
//   },{})

//   console.log(output);
  
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// const input = "Every developer likes to mix kubernetes and javascript";
// result = "E3y d7r l3s to mix k8s and j8t";
// const words = input.split(" ");
// const data = words.map(e => {
//     return  e.charAt(0) + (e.length - 2) + e.charAt(e.length - 1)
// }

// )
// console.log(data)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// You are given an array of objects representing a collection of products, each with a name, 
// price, and category. Your task is to use map, filter, and reduce to calculate the average 
// price of products in each category, and then return an array of objects containing only the 
// categories that have an average price above 50.


const products = [
    { name: "Product 1", price: 20, category: "Electronics" },
    { name: "Product 2", price: 30, category: "Clothes" },
    { name: "Product 3", price: 40, category: "Electronics" },
    { name: "Product 4", price: 50, category: "Clothes" },
    { name: "Product 5", price: 60, category: "Clothes" },
    { name: "Product 6", price: 70, category: "Electronics" },
    { name: "Product 7", price: 80, category: "Clothes" },
    { name: "Product 8", price: 90, category: "Electronics" },
  ];

  const productsByCategory = {};
products.forEach(e => {
  if (!productsByCategory[e.category]) {
    productsByCategory[e.category] = [];
  }
  productsByCategory[e.category].push(e);
});
  console.log(productsByCategory);
  