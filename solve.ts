// 常规 dp
// function climbStairs(n: number): number {
//     // dp[i] = dp[i - 1] + dp[i - 2]
//     // dp[1] = 1, dp[2] = 2
//     const dp = new Array(0, 1, 2)
//     for (let i = 3; i <= n; i++)
//         dp[i] = dp[i - 1] + dp[i - 2]    
//     return dp[n]
// };

// 背包问题转换
function climbStairs(n: number): number {
    const dp = new Array(n + 1).fill(0)
    dp[0] = 1
    // 排列问题，先遍历背包
    for (let j = 0; j <= n; j++) {
        for (let i = 1; i <= 2; i++) {
            if (j - i >= 0)
                dp[j] += dp[j - i]
        }
    }
    return dp[n]
};

climbStairs(3)