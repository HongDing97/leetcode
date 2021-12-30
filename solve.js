var ListNode = function (val = 0, next = null) {
    return { val, next }
}
var MyLinkedList = function () {
    this.head = new ListNode(-1, null)
    this.r = this.head      // 注意时刻维护尾指针
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    let p = this.head.next
    for (let i = 0; p && i < index; i++)
        p = p.next
    return p ? p.val : -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    this.head.next = new ListNode(val, this.head.next)
    if (this.head === this.r)    // first time insert a node
        this.r = this.r.next
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    let s = new ListNode(val, null)
    this.r.next = s
    this.r = s
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0)
        this.addAtHead(val)
    else {
        let p = this.head
        let i = 0
        for (; p.next && i < index; i++)
            p = p.next
        if (index > i)
            return
        else if (!p.next)
            this.addAtTail(val)
        else
            p.next = new ListNode(val, p.next)
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0)
        return
    let p = this.head
    let i = 0
    for (; p.next && i < index; i++)
        p = p.next
    if (!p.next)
        return
    // 真是个大坑！
    // 一旦引入尾指针，要时刻注意维护尾指针的真是指向！
    // if it's the last node
    if (!p.next.next)
        this.r = p
    p.next = p.next.next
};

var obj = new MyLinkedList()

console.log(obj.addAtHead(84))
console.log(obj.addAtTail(2))
console.log(obj.addAtTail(39))
console.log(obj.get(3))
console.log(obj.get(1))
console.log(obj.addAtTail(42))
console.log(obj.addAtIndex(1, 80))
console.log(obj.addAtHead(14))
console.log(obj.addAtHead(1))
console.log(obj.addAtTail(53))
console.log(obj.addAtTail(98))
console.log(obj.addAtTail(19))
console.log(obj.addAtTail(12))
console.log(obj.get(2))
console.log(obj.addAtHead(16))
console.log(obj.addAtHead(33))
console.log(obj.addAtIndex(4, 17))
console.log(obj.addAtIndex(6, 8))
console.log(obj.addAtHead(37))
console.log(obj.addAtTail(43))
console.log(obj.deleteAtIndex(11))
console.log(obj.addAtHead(80))
console.log(obj.addAtHead(31))
console.log(obj.addAtIndex(13, 23))
console.log(obj.addAtTail(17))
console.log(obj.get(4))
console.log(obj.addAtIndex(10, 0))
console.log(obj.addAtTail(21))
console.log(obj.addAtHead(73))
console.log(obj.addAtHead(22))
console.log(obj.addAtIndex(24, 37))
console.log(obj.addAtTail(14))
console.log(obj.addAtHead(97))
console.log(obj.addAtHead(8))
console.log(obj.get(6))
console.log(obj.deleteAtIndex(17))
console.log(obj.addAtTail(50))
console.log(obj.addAtTail(28))
console.log(obj.addAtHead(76))
console.log(obj.addAtTail(79))
console.log(obj.get(18))
console.log(obj.deleteAtIndex(30))
console.log(obj.addAtTail(5))
console.log(obj.addAtHead(9))
console.log(obj.addAtTail(83))
console.log(obj.deleteAtIndex(3))
console.log(obj.addAtTail(40))
console.log(obj.deleteAtIndex(26))
console.log(obj.addAtIndex(20, 90))
console.log(obj.deleteAtIndex(30))
console.log(obj.addAtTail(40))
console.log(obj.addAtHead(56))
console.log(obj.addAtIndex(15, 23))
console.log(obj.addAtHead(51))
console.log(obj.addAtHead(21))
console.log(obj.get(26))
console.log(obj.addAtHead(83))
console.log(obj.get(30))
console.log(obj.addAtHead(12))
console.log(obj.deleteAtIndex(8))
console.log(obj.get(4))
console.log(obj.addAtHead(20))
console.log(obj.addAtTail(45))
console.log(obj.get(10))
console.log(obj.addAtHead(56))
console.log(obj.get(18))
console.log(obj.addAtTail(33))
console.log(obj.get(2))
console.log(obj.addAtTail(70))
console.log(obj.addAtHead(57))
console.log(obj.addAtIndex(31, 24))
console.log(obj.addAtIndex(16, 92))
console.log(obj.addAtHead(40))
console.log(obj.addAtHead(23))
console.log(obj.deleteAtIndex(26))
console.log(obj.get(1))
console.log(obj.addAtHead(92))
console.log(obj.addAtIndex(3, 78))
console.log(obj.addAtTail(42))
console.log(obj.get(18))
console.log(obj.addAtIndex(39, 9))
console.log(obj.get(13))
console.log(obj.addAtIndex(33, 17))
console.log(obj.get(51))
console.log(obj.addAtIndex(18, 95))
console.log(obj.addAtIndex(18, 33))
console.log(obj.addAtHead(80))
console.log(obj.addAtHead(21))
console.log(obj.addAtTail(7))
console.log(obj.addAtIndex(17, 46))
console.log(obj.get(33))
console.log(obj.addAtHead(60))
console.log(obj.addAtTail(26))
console.log(obj.addAtTail(4))
console.log(obj.addAtHead(9))
console.log(obj.get(45))
console.log(obj.addAtTail(38))
console.log(obj.addAtHead(95))
console.log(obj.addAtTail(78))
console.log(obj.get(54))
console.log(obj.addAtIndex(42, 86))

