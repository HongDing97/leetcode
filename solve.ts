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

function isSymmetric(root: TreeNode | null): boolean {

    type TNode = TreeNode | null

    function isNodeEqual(a: TNode, b: TNode) {
        return (a === null && b === null) || (a?.val === b?.val)
    }

    const queue: TNode[] = []
    root && queue.push(root)
    while (queue.length) {
        const len = queue.length, stack: TNode[] = []
        for (let i = 0; i < len; i++) {
            const t = queue.shift() as TNode
            if (i < len / 2) 
                stack.push(t)
            else {
                if (!stack.length || !isNodeEqual(stack.pop() as TNode, t)) 
                    return false
            }
            t && queue.push(t.left) && queue.push(t.right)
        }
    }
    return true
};

const root = createTree([1, 2, 2, 3, null, null, 3])
isSymmetric(root)