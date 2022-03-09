function lastStoneWeightII(stones: number[]): number {
    const sum = stones.reduce((pre, cur) => pre + cur), target = Math.floor(sum / 2)
    const dp = new Array(target + 1).fill(0)
    for (let i = 0; i < stones.length; i++) {
        for (let j = target; j >= stones[i]; j--)
            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
    return sum - dp[target] - dp[target]
};

lastStoneWeightII([31,26,33,21,40])