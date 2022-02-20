- 数据结构

1. 连续结构
2. 跳转结构

## 查询数组任意区间的累加和

> 要求查询频率极高

- 建表

1. 需要 一个正方形矩阵 n^2 / 2 的空间

2. 更适合`数据量巨大`的情况，因为它是直接返回值

- 前缀和数组

1. 建立一个 H 数组, 里面的每一项是 `0-i` 的和

2. 当 L 为 0,则直接取 H[R], 不为 0,则取 H[R] - H[L-1]

```js
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

```

## 随机函数

- 等概率

1. js中的 `Math.random` 也是等概率的

```js
function main() {
  const testTimes = 10000000;
  let count = 0;
  for (let i = 0; i < testTimes; i++) {
    if (Math.random() < 0.3) {
      count++;
    }
  }
  console.log(count / testTimes); // 0.3 左右
}
main();

```

- 返回一个 [0,1) 的小数 任意的 x , x 属于 [0,x)范围上的数出现概率由原来的 x 调整成 x 平方

```js
function xToPower2 () {
  // 0 - x
  return Math.max(Math.random(), Math.random())
}
```

- 已知一个等概率区间求另一个区间是等概率的

1. 比如 [1,5]随机求 [1,7]随机

```js
function f3() {
  const testTimes = 10000000;
  // 已知区间[1,5) 返回一个数是等概率的
  // 求解 [1,7)
  const f = () => Math.random() * 4 + 1;
  // 1. 得到 0 ,1 两个数是等概率的
  const f1 = () => {
    let ans = 0;
    do {
      ans = f();
    } while (ans === 3);
    return ans < 3 ? 0 : 1;
  };
  const f2 = () => {
    // 2. 000 - 111也是等概率的 ,从而得到 0 - 7 等概率返回一个
    return (f1() << 2) + (f1() << 1) + f1();
  };
  const f3 = () => {
    // 3. 等概率返回 0 - 6
    let ans = 0;
    do {
      ans = f2();
    } while (ans === 7);
    return ans;
  };
  const g = () => {
    //4. 等概率返回1-7
    return f3() + 1;
  };

  let count = 0;
  for (let i = 0; i < testTimes; i++) {
    if (f1() == 0) {
      count++;
    }
  }
  console.log('test 产生0，1是等概率的', count / testTimes);

  let arr = new Array(8);
  arr.fill(0);
  for (let i = 0; i < testTimes; i++) {
    let num = g();
    arr[num]++;
  }
  for (let i = 0; i < 8; i++) {
    console.log(i + '这个数，出现了 ' + arr[i] + ' 次');
  }
}
```

- fn 返回 0 ,1 是不等概率的，求函数 `g使其返回 0,1是等概率的`

```js
function fn () {
  return Math.random() < 0.84 ? 0 : 1
}
function g () {
  let ans = 0
  do {
    ans = fn()
  } while (ans === fn())
  // 第一次fn 和 第二次fn相同的时候舍弃
  // 不相同则返回
  return ans
}
```

## 对数器

> 如何验证排序算法

- 生成一个长度随机且value也随机