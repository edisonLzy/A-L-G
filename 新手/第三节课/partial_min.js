const randomArray = require("./random");
function partial_min(arr) {
    if (arr == null || arr.length == 0) {
        return -1;
    }
    let N = arr.length;
    if (N == 1) {
        return 0;
    }
    if (arr[0] < arr[1]) {
        return 0;
    }
    if (arr[N - 1] < arr[N - 2]) {
        return N - 1;
    }
    let L = 0;
    let R = N - 1;
    while (L < R - 1) {
        const mid = Math.floor((R + L) / 2);
        if (arr[mid] < arr[mid + 1] && arr[mid] < arr[mid - 1]) {
            // 同时小于左边和右边，则说明是局部最小
            return mid
        } else {
            if (arr[mid] > arr[mid - 1]) {
                R = mid - 1
            } else {
                L = mid + 1;
            }
        }
    }
    return arr[L] < arr[R] ? L : R;
}
function check(arr, minIndex) {
    if (arr.length === 0) return minIndex === -1;
    let left = minIndex - 1;
    let right = minIndex + 1;
    const leftBigger = left >= 0 ? arr[left] > arr[minIndex] : true;
    const rightBigger = right < arr.length ? arr[right] > arr[minIndex] : true;
    return leftBigger && rightBigger
}
function main() {
    let maxLen = 100;
    let maxValue = 200;
    let testTime = 100;
    for (let i = 0; i < testTime; i++) {
        let arr = randomArray(maxLen, maxValue);
        let ans = partial_min(arr);
        if (!check(arr, ans)) {
            console.log('error');
            break;
        }
    }
    console.log("测试结束");
}
main()