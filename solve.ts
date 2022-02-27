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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (!nums.length) return null
    if (nums.length === 1) return new TreeNode(nums[0], null, null)
    let low = 0, high = nums.length - 1, mid = Math.floor((high + low) / 2)
    return new TreeNode(nums[mid], sortedArrayToBST(nums.slice(low, mid)), sortedArrayToBST(nums.slice(mid + 1, high + 1)))
};

const root = sortedArrayToBST([-10, -3, 0, 5, 9])