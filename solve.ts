function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((pre, cur) => pre + cur)
    // 如果不能平分，直接 return false
    if (sum % 2 === 1)
        return false
    const dp = new Array(sum / 2 + 1).fill(0)
    for (let i = 0; i <= nums.length; i++) {
        for (let j = sum / 2; j >= nums[i]; j--)
            dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
    }
    return dp[dp.length - 1] === sum / 2
};

canPartition([1, 5, 11, 5])