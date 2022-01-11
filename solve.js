/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next)
        return head
    let dummy = new ListNode(0, head)
    let p = dummy, q = head, r = head.next
    while (r) { 
        q.next = r.next
        r.next = q
        p.next = r

        p = q
        q = q.next
        r = q ? q.next : null
    }
    return dummy.next
}
