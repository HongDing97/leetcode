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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const queue: (TreeNode | null) [] = []
    queue.push(p, q)
    while (queue.length) {
        const len = queue.length
        for (let i = 0; i< len; i++) {
            const l = queue.pop(), r = queue.pop()
            if (!l && !r)
                continue
            if (!l || !r || l.val !== r.val)
                return false
            queue.push(l.left)
            queue.push(r.left)
            queue.push(l.right)
            queue.push(r.right)
        }
    }  
    return queue.length === 0
};