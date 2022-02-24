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
