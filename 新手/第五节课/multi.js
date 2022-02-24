const { add } = require("./add");
function multi(a, b) {
    let res = 0;
    while (b !== 0) {
        if (b & 1 !== 0) {
            res = add(res, a);
        }
        a = a << 1; // 右移补0
        b = b >>> 1; // 左移舍弃
    }
    return res;
}
console.log(multi(2, 9));