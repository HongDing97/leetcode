function subsetsWithDup(nums: number[]): number[][] {
    const res: number[][] = [], path: number[] = [], visited = new Array(nums.length).fill(0)
    nums.sort((x, y) => x - y)
    dfs()
    return res
    function dfs(startIndex = 0) {
        res.push([...path])
        if (startIndex === nums.length)
            return
        for (let i = startIndex; i < nums.length; i++) {
            // 剪枝去重
            if (i > 0 && nums[i] === nums[i -1] && visited[i - 1] === 0)
                continue
            path.push(nums[i])
            visited[i] = 1
            dfs(i + 1)
            visited[i] = 0
            path.pop()
        }
    }
};


subsetsWithDup([1, 2, 2])