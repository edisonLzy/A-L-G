function toBinary(number) {
  let result = '';
  for (let i = 31; i >= 0; i--) {
    result += (number & (1 << i)) === 0 ? '0' : '1';
  }
  return result;
}
const num = 32;

console.assert(toBinary(num) === num.toString(2).padStart(32, 0));
