function solveNQueens(n: number): string[][] {
    const res: string[][] = [], map: number[][] = []
    for (let i = 0; i < n; i++)
        map.push(new Array(n).fill(0))
    dfs()
    return res
    function validate(r: number, c: number) {
        for (let i = 0; i < n; i++) {
            if (map[r][i] === 1)
                return false
        }
        let i = r - 1, j = c - 1
        while (i >= 0 && j >= 0) {
            if (map[i--][j--] === 1)
                return false
        }
        i = r + 1, j = c - 1
        while (i < n && j >= 0) {
            if (map[i++][j--] === 1)
                return false
        }
        return true
    }
    function dfs(deepth = 0) {
        if (deepth === n) {
            const ans: string[] = []
            for (const row of map)
                ans.push(row.map(e => e === 1 ? 'Q' : '.').join(''))
            res.push(ans)
            return
        }
        for (let i = 0; i < n; i++) {
            if (!validate(i, deepth))
                continue
            map[i][deepth] = 1
            dfs(deepth + 1)
            map[i][deepth] = 0
        }
    }
};

solveNQueens(4)