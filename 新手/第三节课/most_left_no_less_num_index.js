// arr = [1,2,2,2,3,4,5,5,5,8]
function most_left_no_less_num_index(arr, num) {
    if (arr === null || arr.length === 0) return -1;
    let L = 0;
    let R = arr.length - 1;
    let idx = -1;
    while (L <= R) {
        const mid = Math.floor((R + L) / 2);
        if (num <= arr[mid]) {
            R = mid - 1;
            idx = mid
        } else {
            L = mid + 1;
        }
    }
    return idx;
}
const arr = [1,2,2,2,3,4,5,5,5,8]
console.log(most_left_no_less_num_index(arr,5));