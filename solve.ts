function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => b - a)
    s.sort((a, b) => b - a)
    let cnt = 0
    for (let i = 0; i < g.length && s.length > 0; i++) {
        if (s[0] >= g[i]) {
            cnt++
            s.shift()
        }
    }
    return cnt
};

findContentChildren([1, 2, 3], [1, 1])