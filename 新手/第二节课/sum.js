function buildPreSum(arr) {
  let res = [];
  let pre = 0;
  for (let i = 0; i < arr.length; i++) {
    res[i] = pre + arr[i];
    pre = res[i];
  }
  return res;
}
function toCalc(arr) {
  const preSum = buildPreSum(arr);
  return function (s, e) {
    if (s === 0) return preSum[e];
    return preSum[e] - preSum[s - 1];
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7];

const calc = toCalc(arr);
console.log(calc(1, 6));
