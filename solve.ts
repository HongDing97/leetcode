function combine(n: number, k: number): number[][] {
    const res: number[][] = [], r: number[] = []
    dfs(1)
    return res
    function dfs(start: number) {
        if (r.length === k) {
            res.push([...r])
            return
        }
        for (let i = start; i <= n; i++) {
            r.push(i)
            dfs(i + 1)
            r.pop()
        }
    }
};

combine(4, 2)