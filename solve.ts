class Node {
    val: number
    children: Node[]
    constructor(val?: number, children?: Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.children = (children === undefined ? [] : children)
    }
}

function maxDepth(root: Node | null): number {
    if (!root) return 0
    let deepth = 0
    for (const node of root.children)
        deepth = Math.max(maxDepth(node), deepth)
    return deepth + 1
};