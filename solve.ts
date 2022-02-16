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

function largestValues(root: TreeNode | null): number[] {
    const res: number[] = [], queue: TreeNode[] = []
    root && queue.push(root)
    while (queue.length) {
        const len = queue.length
        let max = 0
        for (let i = 0; i < len; i++) {
            const t = queue.shift()
            t?.left && queue.push(t.left)
            t?.right && queue.push(t.right)
            if (i === 0 || max < t?.val!)
                max = t?.val!
        }
        res.push(max)
    }
    return res
};