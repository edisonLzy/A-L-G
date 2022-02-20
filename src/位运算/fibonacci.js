function fibonacci(n) {
  if (n === 1 || n === 2) return 1;
  let a = 1,
    b = 1;
  let c;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
console.log(fibonacci(5));
