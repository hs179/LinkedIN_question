function fn(data){
    seen = []
    const unq = data.filter(value => {
        if(seen.includes(value.id)){
            return false
        }else{
            seen.push(value.id)
            return true
        }
    })
    return unq;
}

const data = [
  { id: 'a', phone: 'iphone X' },
  { id: 'b', phone: 'iphone K' },
  { id: 'a', phone: 'iphone H' }
];

console.log(fn(data));
// [{ id: 'a', phone: 'iphone X' }, { id: 'b', phone: 'iphone K' }]

const users = [
  { id: 1, name: 'Alice', email: 'alice@email.com' },
  { id: 2, name: 'Bob', email: 'bob@email.com' },
  { id: 1, name: 'Alice2', email: 'alice2@email.com' }
];

console.log(fn(users));
// [{ id: 1, name: 'Alice', email: 'alice@email.com' }, { id: 2, name: 'Bob', email: 'bob@email.com' }]

console.log(fn([{ id: 1, val: 'x' }]));
// [{ id: 1, val: 'x' }]

console.log(fn([]));
// []

console.log(fn([{ id: 'x', data: 1 }, { id: 'x', data: 2 }, { id: 'x', data: 3 }]));
// [{ id: 'x', data: 1 }]