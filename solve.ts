function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    const dp = new Array(nums1.length + 1).fill(0).map(e => new Array(nums2.length + 1).fill(0))
    let res = 0
    for (let i = 1; i <= nums1.length; i++) {
        for (let j = 1; j <= nums2.length; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
            if (dp[i][j] > res)
                res = dp[i][j]
        }
    }
    return res
};

maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2])