function fn(num) {
  if (num <= 1) return num;
  let a = 0;
  let b = 1;
  for (let i = 2; i <= num; i++) {
    let next = a + b;
    a = b;
    b = next;
  }
  return b;
}

console.log(fn(7)); // 13
