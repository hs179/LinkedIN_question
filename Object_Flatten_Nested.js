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



function fn(obj, parentkey='', result={}){
   for(let key in obj){
       const newKey = parentkey ? `${parentkey}.${key}` : key;
       if(typeof obj[key] === 'object' && obj[key] !== null){
           fn(obj[key],newKey,result)
       }else{
           result[newKey] =obj[key]
       }
       
   }
   return result
}




console.log(fn(input))  

// {
//   "user.id": 101,
//   "user.profile.name": "Alice",
//   "user.profile.address.city": "New York",
//   "user.profile.address.zip": "10001",
//   "status": "active"
// }