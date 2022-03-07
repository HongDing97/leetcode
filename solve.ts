function climbStairs(n: number): number {
    // dp[i] = dp[i - 1] + dp[i - 2]
    // dp[1] = 1, dp[2] = 2
    const dp = new Array(0, 1, 2)
    for (let i = 3; i <= n; i++)
        dp[i] = dp[i - 1] + dp[i - 2]    
    return dp[n]
};