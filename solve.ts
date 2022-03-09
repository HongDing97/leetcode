function findTargetSumWays(nums: number[], target: number): number {
    // dp += dp[j - num[i]]
    const sum = nums.reduce((pre, cur) => pre + cur)
    if (((target + sum) % 2 === 1) || (Math.abs(target) > sum))
        return 0
    const left = (target + sum) / 2
    const dp = new Array(left + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = left; j >= nums[i]; j--)
            dp[j] += dp[j - nums[i]]
    }
    return dp[left]
};

findTargetSumWays([1, 1, 1, 1, 1], 3)