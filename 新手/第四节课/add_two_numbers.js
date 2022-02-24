const add_two_numbers = function (l1, l2) {
  const l1_len = get_length(l1);
  const l2_len = get_length(l2);
  let l = l1_len >= l2_len ? l1 : l2;
  let s = l === l1 ? l2 : l1;
  let head = l;
  let last = l; // 当 长链表也遍历完之后 ,carry不等于0 ,则需要用这个last指针指向一个新的尾节点
  let carry = 0;
  while (s) {
    // s 和 l 都存在的情况
    const s_val = s.val;
    const l_val = l.val;
    const sum = s_val + l_val + carry; //计算总和
    l.val = sum % 10; // 更新长链表当前节点的值 取余
    carry = Math.floor(sum / 10); // 进位
    s = s.next;
    last = l;
    l = l.next;
  }
  while (l) {
    // l 存在的情况
    const l_val = l.val;
    const sum = l_val + carry; //计算总和
    l.val = sum % 10; //更新长链表当前节点的值
    carry = Math.floor(sum / 10);
    last = l;
    l = l.next;
  }
  if (carry !== 0) {
    last.next = new ListNode(carry);
  }
  return head;
};

const get_length = (l) => {
  if (!l) return 0;
  let count = 0;
  while (l) {
    count += 1;
    l = l.next;
  }
  return count;
};
