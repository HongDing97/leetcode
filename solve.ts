/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

 function connect(root: Node | null): Node | null {
    const queue: Node[] = []
    root && queue.push(root)
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            if (i === len - 1)
                queue[0].next = null
            else
                queue[0].next =queue[1]
            const t = queue.shift()
            t?.left && queue.push(t.left!)
            t?.right && queue.push(t.right!)
        }
    }
    return root
};