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

function createTree(nodes: (number | null)[]): TreeNode | null {
    if (!nodes.length)
        return null
    const root = new TreeNode(nodes.shift()!), queue: TreeNode[] = [root]
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i < len; i++) {
            const t = queue.shift()!, l = nodes.shift(), r = nodes.shift()
            t.left = l ? new TreeNode(l, null, null) : null
            t.right = r ? new TreeNode(r, null, null) : null
            t.left && queue.push(t.left)
            t.right && queue.push(t.right)
        }
    }
    return root
}

function findMaxIdx (nums: number[]): number {
    let maxIdx = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[maxIdx])
            maxIdx = i
    }
    return maxIdx
} 

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    if (!nums.length)
        return null
    const idx = findMaxIdx(nums), root = new TreeNode(nums[idx])
    root.left = constructMaximumBinaryTree(nums.slice(0,idx))
    root.right = constructMaximumBinaryTree(nums.slice(idx + 1))
    return root
};