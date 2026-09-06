function deep(obj){
    if(typeof obj !== 'object' || obj === null){
        return obj
    }

    const result = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        result[key] = deep(obj[key])
    }
    return result
}


// Example
const original = {
    name: "John",
    age: 25,
    address: {
        city: "Delhi",
        pincode: 110001
    },
    hobbies: ["coding", "reading"]
};

const copy = deep(original);

copy.address.city = "Mumbai";
copy.hobbies.push("gaming");

console.log(original);
console.log(copy);