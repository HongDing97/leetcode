class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function levelOrderBottom(root: TreeNode | null): number[][] {
    const res: number[][] = [], queue: TreeNode[] = []
    root && queue.push(root)
    while (queue.length) {
        const len = queue.length
        const r: number[] = []
        for (let i = 0; i < len; i++) {
            const t = queue.shift()
            r.push(t?.val!)
            t?.left && queue.push(t.left)
            t?.right && queue.push(t.right)
        }
        res.push(r)
    }
    return res.reverse()
};