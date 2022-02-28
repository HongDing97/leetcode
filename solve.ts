function permute(nums: number[]): number[][] {
    const res: number[][] = [], path: number[] = [], visited: boolean[] = new Array(nums.length).fill(false)
    dfs()
    return res
    function dfs(deepth = 0) {
        if (deepth === nums.length) {
            res.push([...path])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true
                path.push(nums[i])
                dfs(deepth + 1)
                path.pop()
                visited[i] = false
            }
        }
    }
};

permute([1, 2, 3])

