function fourSumCount(nums1: number[], nums2: number[], nums3: number[], nums4: number[]): number {
    let cnt = 0
    let hash = {}
    for (const i of nums1) {
        for (const j of nums2) {
            if (hash[i + j] === undefined)
                hash[i + j] = 1
            else
                hash[i + j]++
        }
    }
    for (const i of nums3) {
        for (const j of nums4) {
            if (hash[0 - (i + j)] !== undefined)
                cnt += hash[0 - (i + j)]
        }
    }
    return cnt
};