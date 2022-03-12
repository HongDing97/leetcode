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

function rob(root: TreeNode | null): number {
    const dp = postOrder(root)
    return Math.max(...dp)
    function postOrder(root: TreeNode | null) {
        if (!root) return [0, 0]
        const l = postOrder(root.left), r = postOrder(root.right)
        // 处理根节点
        // 如果 root 不偷，那么左右子树偷不偷都无所谓，返回左右子节点各最大的值的和
        // 如果 root 偷了，那么左右子树一定都不能偷
        return [Math.max(l[0], l[1]) + Math.max(r[0], r[1]), l[0] + r[0] + root.val]
    }
};

rob(createTree([3, 2, 3, null, 3, null, 1]))