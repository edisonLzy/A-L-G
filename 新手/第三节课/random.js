const rand = (max) => Math.floor(Math.random() * max);
function randomArr(len, maxValue) {
  const arr = new Array(len);
  arr[0] = rand(maxValue);
  for (let i = 0; i < arr.length; i++) {
    do {
      arr[i] = rand(maxValue);
    } while (arr[i] === arr[i - 1]);
  }
  return arr;
}
