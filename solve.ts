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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root)  return new TreeNode(val, null, null)

    let lastVisited: TreeNode | null = null
    dfs(root)
    return root

    function dfs(root: TreeNode | null) {
        if (!root) {
            if (lastVisited && val < lastVisited.val)
                lastVisited.left = new TreeNode(val, null, null)
            if (lastVisited && val > lastVisited?.val)
                lastVisited.right = new TreeNode(val, null, null)
        }
        lastVisited = root
        if (val < root?.val!)
            dfs(root?.left!)
        else if (val > root?.val!)
            dfs(root?.right!)
    }
};
