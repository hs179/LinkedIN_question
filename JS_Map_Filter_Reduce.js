function fn(students){
   return students.map(student => {
       const total = student.scores.reduce((sum,curr) => sum+=curr,0);
       const average = total/student.scores.length;
       return {name:student.name, average:average}
   }).filter(value => value.average > 80)
 
   
}


const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
];

console.log(fn(students));
// [{ name: "Alice", average: 89 }, { name: "Charlie", average: 90 }, { name: "Jack", average: 100 }]

const students2 = [
  { name: "John", scores: [50, 60, 70] },
  { name: "Sarah", scores: [85, 90, 88] },
  { name: "Mike", scores: [75, 75, 75] }
];

console.log(fn(students2));
// [{ name: "Sarah", average: 87.67 }]

console.log(fn([{ name: "Test", scores: [100, 100, 100] }]));
// [{ name: "Test", average: 100 }]

console.log(fn([{ name: "Low", scores: [50, 40, 30] }]));
// []

console.log(fn([]));
// []

console.log(fn([{ name: "Edge", scores: [80, 81] }]));
// [{ name: "Edge", average: 80.5 }]