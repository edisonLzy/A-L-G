function add(a, b) {
    let sum = 0;
    while (b !== 0) {
        sum = a ^ b;
        b = (a & b) << 1
        a = sum;
    }
    return sum;
}

console.log(add(10, 20));
module.exports = {
    add
};