// 贪心
// function maxProfit(prices: number[]): number {
//     let profit = 0
//     for(let i = 0; i < prices.length - 1; i++) {
//         if (prices[i + 1] > prices[i])
//             profit += prices[i + 1] - prices[i]
//     }
//     return profit
// };

// dp
function maxProfit(prices: number[]): number {
    const dp = new Array(prices.length).fill(0).map(e => new Array(2).fill(0))
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0])
    }
    return dp[prices.length - 1][1]
};


maxProfit([7, 1, 5, 3, 6, 4])