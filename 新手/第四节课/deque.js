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
