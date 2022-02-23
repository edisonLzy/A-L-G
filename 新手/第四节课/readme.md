## 链表

### 逆序

- 单链表

1. https://leetcode-cn.com/problems/UHnkqh/

- 双链表

### 单链表实现队列和栈

### 双链表实现双端队列

```ts
class Deque {
  push_head(){}
  push_tail(){}
  poll_head(){}
  poll_tail(){}
}
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
if(l1  == null || l2 == null){
        return l1 || l2;
    }
    const l1_head_val = l1.val;
    const l2_head_val = l2.val;
    const head = l1_head_val <= l2_head_val ? l1:l2;
    let cur1 = head.next;
    let cur2 = head === l1 ? l2:l1;
    let pre = head;
    while( cur1 && cur2){
        const v1 = cur1.val;
        const v2 = cur2.val;
        if( v1 > v2){
            pre.next = cur2;
            cur2 = cur2.next;
        }else{
            pre.next = cur1;
            cur1 = cur1.next;
        }
        pre = pre.next;
    }
    pre.next = cur1 ? cur1: cur2;
    return head;
```