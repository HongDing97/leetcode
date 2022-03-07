function uniquePaths(m: number, n: number): number {
    // dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    // 第一行 & 第一列全部为 1，显然到达第一行、第一列上的任意一点，都只有可能一种路径
    const dp: number[][] = []
    for (let i = 0; i < m; i++) 
        dp.push(new Array(n).fill(1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++)
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
    return dp[m - 1][n - 1]
};

uniquePaths(3, 2)