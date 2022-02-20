function f1() {
  // [0, 1)
  // 证明 Math.random是等概率的
  const testTimes = 10000000;
  let count = 0;
  for (let i = 0; i < testTimes; i++) {
    if (Math.random() < 0.3) {
      count++;
    }
  }
  console.log('f1', count / testTimes);
}
function f2() {
  // [0, 8)
  const testTimes = 10000000;
  let count = 0;
  for (let i = 0; i < testTimes; i++) {
    if (Math.random() * 8 < 5) {
      count++;
    }
  }
  console.log('f2', count / testTimes);
  console.log('f2', 5 / 8);
}
function f3() {
  const testTimes = 10000000;
  // 已知区间[1,6) 返回一个数是等概率的
  // 求解 [1,12)
  const f = () => Math.random() * 5 + 1;
  // 1. 得到 0 ,1 两个数是等概率的
  const f1 = () => {
    let ans = 0;
    do {
      ans = f();
    } while (ans === 3.5);
    return ans < 3.5 ? 0 : 1;
  };
  const f2 = () => {
    // 2. 0000 - 1111也是等概率的 ,从而得到 0 - 15 等概率返回一个
    return (f1() << 3) + (f1() << 2) + (f1() << 1) + f1();
  };
  const f3 = () => {
    // 3. 等概率返回 0 - 11
    let ans = 0;
    do {
      ans = f2();
    } while (ans >= 12);
    return ans;
  };
  const g = () => {
    //4. 等概率返回1-12
    return f3() + 1;
  };

  let count = 0;
  for (let i = 0; i < testTimes; i++) {
    if (f1() == 0) {
      count++;
    }
  }
  console.log('test 产生0，1是等概率的', count / testTimes);

  let arr = new Array(12);
  arr.fill(0);
  for (let i = 0; i < testTimes; i++) {
    let num = g();
    arr[num]++;
  }
  for (let i = 0; i < 12; i++) {
    console.log(i + '这个数，出现了 ' + arr[i] + ' 次');
  }
}
function main() {
  //   f1();
  //   f2();
  f3();
}
main();
