const input = {
  user: {
    id: 101,
    profile: {
      name: "Alice",
      address: {
        city: "New York",
        zip: "10001"
      }
    }
  },
  status: "active"
};

function fn(obj) {
let output = {}
for(let key in obj){
  if(typeof obj[key] === "object" && obj[key] !== null){
      Object.assign(output, fn(obj[key]))
  }else{
      output[key] = obj[key]
  }
}
return output
}

console.log(fn(input));