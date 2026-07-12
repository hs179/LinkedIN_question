const arr = [1, 2, 2, 3, 3, 4]
function fn(arr) {
    const occ = {}
    for (let value of arr) {
        if (occ[value]) {
            occ[value] += 1;
        } else {
            occ[value] = 1;
        }
    }

    for (let num of arr) {
        if (occ[num] === 1) return num
    }
}
console.log(fn(arr))