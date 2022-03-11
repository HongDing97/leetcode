function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = new Array(s.length + 1).fill(false)
    dp[0] = true
    for (let j = 0; j <= s.length; j++) {
        for (const word of wordDict) {
            if (j >= word.length && dp[j - word.length] === true && s.slice(j - word.length, j) === word)
                dp[j] = true
        }
    }
    return dp[s.length]
};

wordBreak('leetcode', ["leet", "code"])