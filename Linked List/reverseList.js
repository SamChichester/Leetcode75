/* 

Given the head of a singly linked list, reverse the list, and return the reversed list.

*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

var reverseList = function(head) {
  if (!head || !head.next) return head;

  let prev = null;
  let curr = head;

  while(curr != null) {
    let next = curr.next
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};