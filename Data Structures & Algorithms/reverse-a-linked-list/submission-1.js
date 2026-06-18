/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        var prev = null;
        var curr = head;

        while (curr) {
            var temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp
        }
        return prev;
    }
}
