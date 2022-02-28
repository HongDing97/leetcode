function subsets(nums: number[]): number[][] {
    // 初始化时把空集放进去
    const res: number[][] = [[]], path: number[] = []
    dfs(0)
    return res
    function dfs(startIndex: number) {
        if (startIndex === nums.length)
            return
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            res.push([...path])
            dfs(i + 1)
            path.pop()
        }
    }
};

subsets([1, 2, 3])