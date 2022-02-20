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

function sumOfLeftLeaves(root: TreeNode | null): number {
    let sum = 0
    function travel(root: TreeNode | null) {
        if (!root)  return 
        if (root.left && !root.left.left && !root.left.right)
            sum += root.left.val
        travel(root.left)
        travel(root.right)
    }
    travel(root)
    return sum
};

sumOfLeftLeaves(createTree([3, 9, 20, null, null, 15, 7]))