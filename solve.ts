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

function maxDepth(root: TreeNode | null): number {
    if (!root)
        return 0
    let l = maxDepth(root.left) + 1, r = maxDepth(root.right) + 1
    return l > r ? l : r
}

const root = createTree([1, 2, 2, 3, null, null, 3])
console.log(maxDepth(root))

// 层序遍历
// function maxDepth(root: TreeNode | null): number {
//     let deepth = 0
//     const queue: TreeNode[] = []
//     root && queue.push(root)
//     while (queue.length) {
//         let len = queue.length
//         for (let i = 0; i < len; i++) {
//             const t = queue.shift()
//             t?.left && queue.push(t.left)
//             t?.right && queue.push(t.right)
//         }
//         deepth++
//     }
//     return deepth
// };

// 前序遍历
// function maxDepth(root: TreeNode | null): number {
//     let deepth = 0, maxDeepth = 0
//     function travel(root: TreeNode | null) {
//         if (!root)
//             return
//         if(++deepth > maxDeepth)
//             maxDeepth = deepth
//         travel(root.left)
//         travel(root.right)
//         deepth--
//     }
//     travel(root)
//     return maxDeepth
// };