function maxSubArray(nums: number[]): number {
    let sum = 0, max = -Infinity
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (sum > max)
            max = sum
        if (sum < 0)
            sum = 0
    }
    return max
};

