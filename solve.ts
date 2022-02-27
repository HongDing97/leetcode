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

// Iteration
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    let cur = root
    while (cur) {
        if (cur.val > p?.val! && cur.val > q?.val!)
            cur = cur.left
        else if (cur.val < p?.val! && cur.val < q?.val!)
            cur = cur.right
        else
            return cur
    }
    return null
};

// Recursion
// function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
//     if (root?.val! < p?.val! && root?.val! < q?.val!) 
//         return lowestCommonAncestor(root?.right!, p, q)
//     else if (root?.val! > p?.val! && root?.val! > q?.val!)
//         return lowestCommonAncestor(root?.left!, p, q)
//     else
//         return root
// };

const root = createTree([6,2,8,0,4,7,9,null,null,3,5])
const p = root?.left!, q = root?.left?.right!
lowestCommonAncestor(root, p, q)