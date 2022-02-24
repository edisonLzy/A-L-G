## 链表

### 逆序

- 单链表

1. https://leetcode-cn.com/problems/UHnkqh/

```js
const reverse_link = function(head) {
  if(!head ) return null;
  let pre = null;
  let next = head;
  while(head){
     next = head.next;
     head.next = pre;
     pre = head;
     head = next;
  }
  return pre;
};
```

- 双链表

```js
function reverse_double_link(head) {
  if (!head) return;
  let pre = null;
  let next = head;
  while (head) {
    next = head.next;
    head.next = pre; // 反转 next指向
    head.pre = next; // 反转 pre指向
    pre = head;
    head = next;
  }
  return pre;
}
```

### 单链表实现队列和栈

- 实现队列

```js
function Node(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class Queue {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  size() {
    return this.size;
  }
  offer(v) {
    const node = new Node(v);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next; // 尾指针后移动
    }
    this.size++;
  }
  poll() {
    let ans = null;
    if (this.head) {
      ans = this.head.val;
      this.head = this.head.next;
      this.size--;
    }
    if (this.head === null) {
      this.tail = null;
    }
    return ans;
  }
  peak() {
    let ans = null;
    if (this.head) {
      ans = this.head.val;
    }
    return ans;
  }
}
const q = new Queue();

q.offer(1);
q.offer(2);
q.offer(3);
q.offer(4);

console.log(q.poll() === 1);
console.log(q.size === 3);
console.log(q.peak() === 2);

```

- 实现栈

```js
function Node(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  size() {
    return this.size;
  }
  push(v) {
    const cur = new Node(v);
    if (this.head === null) {
      this.head = cur;
    } else {
      cur.next = this.head;
      this.head = cur;
    }
    this.size++;
  }
  pop() {
    let ans = null;
    if (this.head) {
      ans = this.head.val;
      this.head = this.head.next;
      this.size--;
    }
    return ans;
  }
  peek() {
    return this.head != null ? this.head.val : null;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);

console.log(s.pop() === 4);
console.log(s.size === 3);
console.log(s.peek() === 3);

```
### 双链表实现双端队列

```ts
function Node(val, next, pre) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.pre = pre === undefined ? null : pre;
}
class Deque {
  constructor() {
    this.head = this.tail = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  size() {
    return this.size;
  }
  push_head(v) {
    const node = new Node(v);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.pre = node;
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  push_tail(v) {
    const node = new Node(v);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.pre = this.tail;
      this.tail = node;
    }
    this.size++;
  }
  poll_head() {
    let ans = null;
    if (this.head === null) {
      return ans;
    }
    this.size--;
    ans = this.head.val;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.pre = null;
    }
    return ans;
  }
  poll_tail() {
    let ans = null;
    if (this.head === null) {
      return ans;
    }
    this.size--;
    ans = this.tail.val;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.pre;
      this.tail.next = null;
    }
    return ans;
  }
  peak_head() {
    let ans = null;
    if (this.head) {
      ans = this.head.val;
    }
    return ans;
  }
  peak_tail() {
    let ans = null;
    if (this.tail) {
      ans = this.tail.val;
    }
    return ans;
  }
}

const d = new Deque();

d.push_tail(1);
d.push_tail(2);
d.push_tail(3);
d.push_head(0);

console.log(d.poll_head() === 0);
console.log(d.peak_head() === 1);
console.log(d.poll_tail() === 3);
console.log(d.peak_tail() === 2);

```

### 给定一个链表和一个常数 k 

> https://leetcode-cn.com/problems/reverse-nodes-in-k-group/


1. 获取 k个 一组的的第 k个节点

2. reverse

### 两个链表相加

1. 找到长链表和短链表

2. 长有，短无. 长有,短有. 长无,短无

3. 记录进位信息 (除10取余)

4. 返回长链表的头

```js
var addTwoNumbers = function(l1, l2) {
   const l1_len = get_length(l1);
   const l2_len = get_length(l2);
   let l = l1_len >= l2_len ? l1: l2;
   let s = l === l1 ? l2: l1;
   let head = l;
   let last = l; // 当 长链表也遍历完之后 ,carry不等于0 ,则需要用这个last指针指向一个新的尾节点
   let carry = 0;
   while(s) {
       // s 和 l 都存在的情况
       const s_val = s.val;
       const l_val = l.val;
       const sum = s_val + l_val +carry; //计算总和
       l.val = sum % 10; // 更新长链表当前节点的值 取余
       carry = Math.floor(sum / 10); // 进位
       s = s.next;
       last = l;
       l = l.next;
   }
   while(l){
      // l 存在的情况
      const l_val = l.val;
      const sum = l_val +carry; //计算总和
      l.val = sum  % 10; //更新长链表当前节点的值
      carry = Math.floor(sum / 10);
      last = l;
      l = l.next;
   }
   if(carry !== 0){
    last.next = new ListNode(carry)
   }
   return head;
 };

function get_length(l){
    if(!l) return 0;
    let count = 0;
    while(l){
        count+=1;
        l = l.next;
    }
    return count
}
```

### 合并链表

1. 确定谁是合并之后的总头部

```js
function merge_link(l1, l2) {
  if (l1 == null || l2 == null) {
    return l1 || l2;
  }
  const l1_head_val = l1.val;
  const l2_head_val = l2.val;
  const head = l1_head_val <= l2_head_val ? l1 : l2;
  let cur1 = head.next;
  let cur2 = head === l1 ? l2 : l1;
  let pre = head;
  while (cur1 && cur2) {
    const v1 = cur1.val;
    const v2 = cur2.val;
    if (v1 > v2) {
      pre.next = cur2;
      cur2 = cur2.next;
    } else {
      pre.next = cur1;
      cur1 = cur1.next;
    }
    pre = pre.next;
  }
  pre.next = cur1 ? cur1 : cur2;
  return head;
}

```