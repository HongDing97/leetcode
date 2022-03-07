function fib(n: number): number {
    // dp[0] = 0, dp[1] = 1
    const dp: number[] = new Array(0, 1)
    let res = 0
    if (n < 2) return dp[n]
    for (let i = 0; i < n - 1; i++) {
        res = dp[0] + dp[1]
        dp[0] = dp[1]
        dp[1] = res
    }
    return res
};

fib(10)