function add(a, b) {
    let sum = 0;
    while (b !== 0) {
        sum = a ^ b;
        b = (a & b) << 1
        a = sum;
    }
    return sum;
}

function minus(a, b) {
    return add(a,add(~b,1))
}
console.log(minus(10,-5));