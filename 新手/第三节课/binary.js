function binary(arr, num) {
  if (arr === null || arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((right - left) / 2);
    if (arr[mid] === num) return true;
    if (arr[mid] < num) {
      // 说明 num 在 mid的右边
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}
