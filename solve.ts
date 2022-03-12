function maxProfit(prices: number[]): number {
    const dp = new Array(prices.length).fill(0)
    let hold = prices[0]
    dp[0] = -hold
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < hold)
            hold = prices[i]
        dp[i] = Math.max(prices[i] - hold, dp[i - 1])
    }
    return dp[prices.length - 1] > 0 ? dp[prices.length - 1] : 0
};

maxProfit([7, 6, 4, 3, 1])