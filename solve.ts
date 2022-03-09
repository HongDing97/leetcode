function findMaxForm(strs: string[], m: number, n: number): number {
    const dp = new Array(m + 1).fill(0).map(e => new Array(n + 1).fill(0))
    for (const str of strs) {
        let zeroCnt = 0
        for (const c of str) {
            if (c === '0')
                zeroCnt++
        }
        const oneCnt = str.length - zeroCnt
        for (let i = m; i >= zeroCnt; i--) {
            for (let j = n; j >= oneCnt; j--)
                dp[i][j] = Math.max(dp[i][j], dp[i - zeroCnt][j - oneCnt] + 1)
        }
    }
    return dp[m][n]
};

findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)