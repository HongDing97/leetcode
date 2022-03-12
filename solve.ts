// 贪心
// function maxProfit(prices: number[], fee: number): number {
//     let profit = 0, min = prices[0]
//     for (let i = 1; i < prices.length; i++) {
//         if (prices[i] < min)
//             min = prices[i]
//         if (prices[i] > min && prices[i] - min <= fee)
//             continue
//         if (prices[i] - min > fee) {
//             profit += prices[i] - min - fee
//             min = prices[i] - fee
//         }
//     }
//     return profit
// };

// dp
function maxProfit(prices: number[], fee: number): number {
    const dp = new Array(prices.length).fill(0).map(e => new Array(2).fill(0))
    dp[0][0] = -prices[0]
    dp[0][1] = 0
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)
    }
    return dp[prices.length - 1][1]
};

maxProfit([1, 3, 2, 8, 4, 9], 2)