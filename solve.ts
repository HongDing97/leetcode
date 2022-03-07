function maxProfit(prices: number[], fee: number): number {
    let profit = 0, min = prices[0]
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < min)
            min = prices[i]
        if (prices[i] > min && prices[i] - min <= fee)
            continue
        if (prices[i] - min > fee) {
            profit += prices[i] - min - fee
            min = prices[i] - fee
        }
    }
    return profit
};

maxProfit([1, 3, 7, 5, 10, 3], 3)