function permuteUnique(nums: number[]): number[][] {
    const res: number[][] = [], path: number[] = [], visited = new Array(nums.length).fill(false)
    dfs()
    return res
    function dfs() {
        if (path.length === nums.length) {
            res.push([...path])
            return 
        }
        const set = new Set()
        for (let i = 0; i < nums.length; i++) {
            if (visited[i] || set.has(nums[i])) 
                continue
            set.add(nums[i])
            path.push(nums[i])
            visited[i] = true
            dfs()
            visited[i] = false
            path.pop()
        }
    }
};

permuteUnique([1, 1, 2])