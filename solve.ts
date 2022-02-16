class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function inorderTraversal(root: TreeNode | null): number[] {
    const res: number[] = [], stack: TreeNode[] = []
    let cur = root
    while (cur || stack.length) {
        if (cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()!
            res.push(cur.val)
            cur = cur.right
        }
    }
    return res
};