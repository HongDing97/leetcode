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

function binaryTreePaths(root: TreeNode | null): string[] {
    const res: string[] = [], path: TreeNode[] = []
    function dfs(root: TreeNode | null) {
        if (!root) return
        path.push(root)
        // 遍历到叶子节点
        if (!root.left && !root.right)
            res.push(path.map(n => n.val).join('->'))
        dfs(root.left)
        dfs(root.right)
        path.pop()
    }
    dfs(root)
    return res
};

binaryTreePaths(createTree([1, 2, 3, null, 5]))