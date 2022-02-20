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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    if (postorder.length === 0)
        return null

    const root = new TreeNode(postorder.pop())
    const splitIndex = inorder.indexOf(root.val)

    root.left = buildTree(inorder.slice(0, splitIndex), postorder.slice(0, splitIndex))
    root.right = buildTree(inorder.slice(splitIndex + 1), postorder.slice(splitIndex))
    return root
};

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])