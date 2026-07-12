function fn(num) {
    return {
        add(n) {
            num += n;
            return this;
        },
        sub(n) {
            num -= n;
            return this;
        },
        result() {
            return num;
        }
    }
}

console.log(fn(6).add(6).result())
