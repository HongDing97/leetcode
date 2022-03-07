function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length, n = obstacleGrid[0].length, dp = new Array(m).fill(0).map(e => new Array(n).fill(0))
    // 初始化把第一行&第一列置1
    // 但是如果遇到障碍物，就停止放1，因为后面的路径都不可达
    for (let i = 0; i < m && obstacleGrid[i][0] !== 1; i++)
        dp[i][0] = 1
    for (let i = 0; i < n && obstacleGrid[0][i] !== 1; i++)
        dp[0][i] = 1
    // dp
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            // 如果该点有障碍物，那就置0
            if (obstacleGrid[i][j] === 1)
                dp[i][j] = 0
            else
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]  // 转移方程
        }
    }
    return dp[m - 1][n - 1]
};

uniquePathsWithObstacles([[0, 1], [0, 0]])