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

function findMode(root: TreeNode | null): number[] {
    let res: number[] = [], lastVisted: TreeNode = root! , cnt = 0, maxCnt = 1
    inOrder(root)
    return res
    function inOrder(root: TreeNode | null) {
        if (!root)  return
        inOrder(root.left)
        if (lastVisted.val === root.val)
            cnt++
        else
            cnt = 1
        if (cnt > maxCnt) {
            res.length = 0
            res.push(root.val)
            maxCnt = cnt
        }
        else if (cnt === maxCnt) 
            res.push(root.val)
        lastVisted = root
        inOrder(root.right)
    }
};

findMode(createTree([1, null, 2, 2]))