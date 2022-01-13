class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next)
        return null
    let slow = head, fast = head
    while (true) {
        slow = slow.next
        // loop doesn't exist
        if (!fast || !fast.next)
            return null
        fast = fast.next.next
        if (fast === slow)
            break;
    }
    // find entrance
    slow = head
    while (slow !== fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};
