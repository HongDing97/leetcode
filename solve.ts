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

function findBottomLeftValue(root: TreeNode | null): number {
    let deepest = 1, depth = 1, p = root
    function dfs(root: TreeNode | null) {
        if (!root)  return
        if (((root.left && !root.left.left && !root.left.right) || (!root.left && root.right && !root.right.left && !root.right.right)) && depth + 1 > deepest) {
            p = root.left ? root.left : root.right
            deepest = depth + 1
        }
        depth++
        dfs(root.left)
        dfs(root.right)
        depth--
    }
    dfs(root)
    return p?.val!
};

findBottomLeftValue(createTree([0,null,-1]))