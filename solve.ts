function minCostClimbingStairs(cost: number[]): number {
    // dp = min(dp[i - 1], dp[i - 2]) + cost[i]
    const n = cost.length, dp = new Array(n + 1)
    dp[0] = cost[0], dp[1] = cost[1]
    cost.push(0)    // cost 最后一位补0
    for (let i = 2; i <= n; i++) 
        dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i]
    return dp[n]
};

minCostClimbingStairs([10,15,20])