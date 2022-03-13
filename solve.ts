function isSubsequence(s: string, t: string): boolean {
    if (t.length < s.length)
        return false
    const dp = new Array(s.length + 1).fill(0).map(e => new Array(t.length + 1).fill(0))
    let maxCnt = 0
    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= t.length; j++) {
            if (s[i - 1] === t[j - 1]) 
                dp[i][j] = dp[i - 1][j - 1] + 1
            else
                dp[i][j] = dp[i][j - 1]
            if (dp[i][j] > maxCnt)
                maxCnt = dp[i][j]
            if (maxCnt === s.length)
                return true
        }
    } 
    return maxCnt === s.length
};

isSubsequence('axc', 'ahbgdc')