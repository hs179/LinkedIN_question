const employees = [
    { name: 'John', department: 'IT' },
    { name: 'Jane', department: 'HR' },
    { name: 'Bob', department: 'IT' },
    { name: 'Alice', department: 'HR' }
];
// Output: { IT: [{name: 'John', department: 'IT'}, {name: 'Bob', department: 'IT'}], HR: [...] 

const result = employees.reduce((acc, curr) => {
    if (!acc[curr.department]) {
        acc[curr.department] = []
    }

    acc[curr.department].push(curr)
    return acc

}, {})
console.log(result)