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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    let sum = 0, flag = false
    function dfs(root: TreeNode | null) {
        if (!root || flag) return
        sum += root.val
        if (!root.left && !root.right && sum === targetSum)
            flag = true
        dfs(root.left)
        dfs(root.right)
        sum -= root.val
    }
    dfs(root)
    return flag
};

hasPathSum(createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22)