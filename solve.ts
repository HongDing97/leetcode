/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

 function levelOrder(root: Node | null): number[][] {
    const res: number[][] = [], queue: Node[] = []
    root && queue.push(root)
    while (queue.length) {
        const len = queue.length
        const r: number[] = []
        for (let i = 0; i < len; i++) {
            const t = queue.shift()
            r.push(t.val)
            for (const n of t.children) 
                queue.push(n)   
        }
        res.push(r)
    }
    return res
};