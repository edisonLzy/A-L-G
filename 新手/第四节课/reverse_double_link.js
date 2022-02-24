function Node(val, next, pre) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  this.pre = pre === undefined ? null : pre;
}
const n_1 = new Node('1');
const n_2 = new Node('2');
const n_3 = new Node('3');
const n_4 = new Node('4');
const n_5 = new Node('5');

n_1.pre = null;
n_1.next = n_2;
n_2.pre = n_1;
n_2.next = n_3;
n_3.pre = n_2;
n_3.next = n_4;
n_4.pre = n_3;
n_4.next = n_5;
n_5.pre = n_4;
n_5.next = null;

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

const reversed_head = reverse_double_link(n_1);
console.log(reversed_head);
