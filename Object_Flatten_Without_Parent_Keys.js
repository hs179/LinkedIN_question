const input = {
  user: {
    id: 101,
    profile: {
      name: "Alice",
      address: { city: "New York", zip: "10001" }
    }
  },
  status: "active"
};



function fn(obj) {
     let objvalue = {}; 
     for (let key in obj) {
         if (typeof obj[key] === 'object' && obj[key] !== null) {
             Object.assign(objvalue, fn(obj[key])); 
            } else {
                 objvalue[key] = obj[key]; 
                } 
            } 
            return objvalue; 
        }




console.log(fn(input))

// {
//   id: 101,
//   name: 'Alice',
//   city: 'New York',
//   zip: '10001',
//   status: 'active'
// }