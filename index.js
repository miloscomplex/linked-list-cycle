/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let isCycle = false
    let slow = head
    let fast = head
    while ( slow && fast ) {
        if (slow.next === null || fast.next === null || fast.next.next === null ) {
            // not a loop
            break
        }
        slow = slow.next
        fast = fast.next.next
        if ( slow === fast ) {
            isCycle = true
            break
        }
    }
    return isCycle
};
