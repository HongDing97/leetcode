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

function rightSideView(root: TreeNode | null): number[] {
    const res: number[] = []
    const queue: TreeNode[] = []
    root && queue.push(root)
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const t = queue.shift()
            t?.left && queue.push(t.left)
            t?.right && queue.push(t.right)
            if (i === len - 1)
                res.push(t?.val!)
        }
    }
    return res
};