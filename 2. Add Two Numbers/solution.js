/**
 * Problem Link - https://leetcode.com/problems/add-two-numbers/
 * The problem was solved using linked list
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;

    // Calculate sum and carry
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);

    // Create new node with the digit
    current.next = new ListNode(sum % 10);
    current = current.next;

    // Move to next nodes if they exist
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
};
