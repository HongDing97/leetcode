function wiggleMaxLength(nums: number[]): number {
    let cnt = 1, preDiff = 0, curDiff = 0
    for (let i = 0; i < nums.length - 1; i++) {
        curDiff = nums[i + 1] - nums[i]
        if ((preDiff <= 0 && curDiff > 0) || (preDiff >=0 && curDiff < 0)) {
            cnt++
            preDiff = curDiff
        }
    }
    return cnt
};