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
