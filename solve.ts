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

function minCameraCover(root: TreeNode | null): number {
    let cnt = 0
    if (postOrder(root) === 0)
        cnt++
    return cnt
    function postOrder(root: TreeNode | null) {
        // 0 - 无覆盖
        // 1 - 有摄像头
        // 2 - 无覆盖
        if (!root) return 2
        let l = postOrder(root.left), r = postOrder(root.right)
        if (l === 2 && r === 2) return 0
        if (l == 0 || r === 0) {
            cnt++
            return 1
        }
        if (l == 1 || r == 1) return 2
    }
};
