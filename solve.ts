function findSubsequences(nums: number[]): number[][] {
    const res: number[][] = [], path: number[] = []
    dfs()
    return res
    function dfs(startIndex = 0) {
        if (path.length > 1)
            res.push([...path])
        const set = new Set()
        for (let i = startIndex; i < nums.length; i++) {
            // 剪枝 
            // 当前节点比上一个节点小
            if (nums[i] < path[path.length - 1])
                continue
            // 去重
            if (set.has(nums[i]))
                continue
            set.add(nums[i])
            path.push(nums[i])
            dfs(i + 1)
            path.pop()
        }
    }
};

findSubsequences([4, 7, 6, 7])