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
