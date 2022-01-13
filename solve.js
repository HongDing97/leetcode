/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let lena = 0, lenb = 0
    let pa = headA
    let pb = headB
    while (pa) {
        lena++
        pa = pa.next
    }
    while (pb) {
        lenb++
        pb = pb.next
    }

    pa = headA
    pb = headB
    if (lena >= lenb) {
        for (let i = 0; i < lena - lenb; i++)
            pa = pa.next
    } else {
        for (let i = 0; i < lenb - lena; i++)
            pb = pb.next
    }
    while (pa) {
        if (pa == pb)
            return pa
        pa = pa.next
        pb = pb.next
    }
    return null
}
