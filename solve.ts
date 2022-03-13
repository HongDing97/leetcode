// 贪心
// function maxSubArray(nums: number[]): number {
//     let sum = 0, max = -Infinity
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//         if (sum > max)
//             max = sum
//         if (sum < 0)
//             sum = 0
//     }
//     return max
// };

// dp
function maxSubArray(nums: number[]): number {
    const dp = new Array(nums.length).fill(0)
    let res = nums[0]
    dp[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 1], nums[i])
        if (dp[i] >res)
            res = dp[i]
    }
    return res
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])