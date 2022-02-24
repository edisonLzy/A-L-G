const reverse_link = function (head) {
  if (!head) return null;
  let pre = null;
  let next = head;
  while (head) {
    next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
};
