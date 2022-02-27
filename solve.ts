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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root)  return null
    root.left = deleteNode(root.left, key)
    if (key === root.val) {
        if (!root.left && !root.right)
            return null
        else if (!root.left && root.right)
            return root.right
        else if (root.left && !root.right)
            return root.left
        else {
            // root.left && root.right
            // 找到左子树最右下方的节点
            let cur = root.left!
            while (cur.right)
                cur = cur.right
            cur.right = root.right
            return root.left
        }
    }
    root.right = deleteNode(root.right, key)
    return root
};

const root = deleteNode(createTree([50,30,70,null,40,60,80]), 50)
console.log('')