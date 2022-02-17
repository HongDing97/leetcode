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

function invertTree(root: TreeNode | null): TreeNode | null {
    function travel(root: TreeNode | null) {
        if (!root)  
            return
        // swap
        const t = root.left
        root.left = root.right
        root.right = t
        t?.left && travel(t.left)
        t?.right && travel(t.right)
    }
    travel(root)
    return root
};