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

function postorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [], stack: TreeNode[] = []
    root && stack.push(root)
    while (stack.length) {
        const t = stack.pop()
        res.push(t?.val!)
        t?.left && stack.push(t.left)
        t?.right && stack.push(t.right)
    }
    return res.reverse()
};