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
var reverseList = function (head) {
    if (!head || !head.next)
        return head
    let p = head, q = head.next
    p.next = null   // 首节点断开作为尾结点
    while(q) {
        const t = q.next
        q.next = p
        p = q
        q = t
    }
    return p
};