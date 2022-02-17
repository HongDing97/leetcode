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

function minDepth(root: TreeNode | null): number {
    let deepth = 0
    const queue: TreeNode[] = []
    root && queue.push(root)
    while (queue.length) {
        const len = queue.length
        deepth++
        for (let i = 0; i < len; i++) {
            const t = queue.shift()
            if (!t?.left && !t?.right)
                return deepth
            t.left && queue.push(t.left)
            t.right && queue.push(t.right)
        }
    }
    return deepth
};