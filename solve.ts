function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [], path: number[] = []
    let sum = target
    dfs(0)
    return res
    function dfs(start: number) {
        if (sum === 0) {
            res.push([...path])
            return
        }
        if (sum < 0)    // 剪枝
            return
        for (let i = start; i < candidates.length; i++) {
            sum -= candidates[i]
            path.push(candidates[i])
            dfs(i)
            path.pop()
            sum += candidates[i]
        }
    }
};

combinationSum([2, 3, 6, 7], 7)