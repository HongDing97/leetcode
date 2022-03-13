function findLengthOfLCIS(nums: number[]): number {
    const dp = new Array(nums.length).fill(1)
    let res = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1])
            dp[i] = dp[i - 1] + 1
        else
            dp[i] = 1
        if (res < dp[i])
            res = dp[i]
    }
    return res
};

findLengthOfLCIS([1, 1, 1, 1, 1])