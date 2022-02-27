function combinationSum2(candidates: number[], target: number): number[][] {
    const res: number[][] = [], path: number[] = [], visited = new Array(candidates.length).fill(0 )
    let sum = target
    candidates.sort((x, y) => x - y)
    dfs()
    return res
    function dfs(startIndex = 0) {
        if (sum === 0) {
            res.push([...path])
            return
        }
        for (let i = startIndex; i < candidates.length && sum - candidates[i] >= 0; i++) {
            if (i > 0 && candidates[i] === candidates[i - 1] && visited[i - 1] === 0)
                continue
            sum -= candidates[i]
            path.push(candidates[i])
            visited[i] = 1
            dfs(i + 1)
            visited[i] = 0
            path.pop()
            sum += candidates[i]
        }
    }
};

combinationSum2([4, 4, 2, 1, 4, 2, 2, 1, 3], 6)