function lengthOfLIS(nums: number[]): number {
    if (nums.length < 2)
        return nums.length
    const dp = new Array(nums.length).fill(1)
    let res = 0
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j])
                dp[i] = Math.max(dp[i], dp[j] + 1)
        }
        if (dp[i] > res)
            res = dp[i]
    }
    return res
};

lengthOfLIS([4, 10, 4, 3, 8, 9])